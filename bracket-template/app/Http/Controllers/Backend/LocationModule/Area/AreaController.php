<?php

namespace App\Http\Controllers\Backend\LocationModule\Area;

use App\Http\Controllers\Controller;
use App\Models\LocationModule\Location;
use App\Models\LocationModule\Zipcode;
use Exception;
use Illuminate\Http\Request;
use Yajra\DataTables\Facades\DataTables;

use Validator;

class AreaController extends Controller
{
    //index function start
    public function index(Request $request){
        try{
            if( can("areas") ){
                $zone_id = 'All';

                if( $request->zone_id ){
                    $zone_id = $request->zone_id;
                }
                
                $zones = Location::orderBy('id', 'asc')->where('type','zone')->get();
                return view("backend.modules.location_module.area.index",compact('zones','zone_id'));
            }
            else{
                return view("errors.403");
            }
        }
        catch( Exception $e ){
            return back()->with('error', $e->getMessage());
        }
    }


    //area add modal start
    public function add_modal(){
        if( can('add_areas') ){
            $zipcodes = Zipcode::where("is_active", true)->select("id","code")->get();

            return view("backend.modules.location_module.area.modals.add", compact('zipcodes'));
        }
        else{
            return unauthorized();
        }
    }


    //data start
    public function data($zone_id){
        if( can('areas') ){
            
            if( $zone_id == 'All' ){
                $areas = Location::orderBy('id', 'desc')
                    ->where('type', 'area')
                    ->select("id","name","location_id","type","is_active",'zipcode_id')
                    ->get(); 
            }
            else{
                $areas = Location::orderBy('id', 'desc')
                ->where('type', 'area')
                ->where("location_id",$zone_id)
                ->select("id","name","location_id","type","is_active",'zipcode_id')
                ->get(); 
            }
            
            return DataTables::of($areas)
            ->rawColumns(['action', 'is_active','name', 'parent','zipcode'])
            ->editColumn('name', function(Location $area){

                return $area->name;
            })
            ->editColumn('parent', function(Location $area){

                return $area->parent ? $area->parent->name : '';
            })
            ->editColumn('zipcode', function(Location $area){

                return $area->zipcode ? $area->zipcode->code : 'N/A';
            })
            ->editColumn('is_active', function (Location $area) {
                if ($area->is_active == true) {
                    return '<p class="badge badge-success">Active</p>';
                } else {
                    return '<p class="badge badge-danger">Inactive</p>';
                }
            })
            ->addColumn('action', function (Location $area) {
                return '
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdown'.$area->id.'" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Action
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdown'.$area->id.'">

                        '.( can("edit_areas") ? '
                        <a class="dropdown-item" href="#" data-content="'.route('area.edit',$area->id).'" data-target="#myModal" class="btn btn-outline-dark" data-toggle="modal">
                            <i class="fas fa-edit"></i>
                            Edit
                        </a>
                        ': '') .'

                        '.( can("view_areas") ? '
                        <a class="dropdown-item" href="#" data-content="'.route('area.view',encrypt($area->id)).'" data-target="#myModal" class="btn btn-outline-dark" data-toggle="modal">
                            <i class="fas fa-eye"></i>
                            View
                        </a>
                        ': '') .'

                    </div>
                </div>
                ';
            })
            ->addIndexColumn()
            ->make(true);
        }else{
            return unauthorized();
        }
    }

    //add start
    public function add(Request $request){
        if( can('add_area') ){
            $validator = Validator::make($request->all(),[
                'name'      => 'required',
                'zipcode_id'      => 'required|integer',
                'is_active' => 'required',
                'location_id' => 'required',
            ]);
            

           if( $validator->fails() ){
               return response()->json(['errors' => $validator->errors()] ,422);
           }else{
                try{
                    $area              = new Location();
                    $area->name        = $request->name;
                    $area->location_id = $request->location_id;
                    $area->zipcode_id = $request->zipcode_id;
                    $area->type        = 'area';
                    $area->is_active   = $request->is_active;
                    
                    if( $area->save() ){
                        return response()->json(['success' => 'New Area '.$area->name.' Created Successfully'], 200);
                    }

                }catch( Exception $e ){
                    return response()->json(['error' => $e->getMessage()],200);
                }
           }
        }else{
            return response()->json(['warning' => unauthorized()],200);
        }
    }


    //edit modal start
    public function edit($id){
        if( can("edit_areas") ){
            $area = Location::where("id",$id)->select("id","name","location_id","type","is_active","zipcode_id")->first();
            $zipcodes = Zipcode::where("is_active", true)->select("id","code")->get();

            return view("backend.modules.location_module.area.modals.edit", compact("area","zipcodes"));
        }
        else{
            return unauthorized();
        }
    }

    //update modal start
    public function update(Request $request, $id){
        if( can('edit_areas') ){

            $validator = Validator::make($request->all(),[
                'name'      => 'required',
                'zipcode_id'      => 'required|integer',
                'is_active' => 'required',
            ]);

           if( $validator->fails() ){
               return response()->json(['errors' => $validator->errors()] ,422);
           }else{
                try{
                    $area = Location::find($id);
                    $area->name        = $request->name;
                    $area->location_id = $request->location_id;
                    $area->zipcode_id = $request->zipcode_id;
                    $area->type        = 'area';
                    $area->is_active   = $request->is_active;

                    if( $area->save() ){
                        return response()->json(['success' => $area->name . "'s Updated Successfully"], 200);
                    }
                }catch( Exception $e ){
                    return response()->json(['error' => $e->getMessage()],200);
                }
           }
        }else{
            return response()->json(['warning' => unauthorized()],200);
        }
    }


    //view function start
    public function view($id){
        if( can("view_areas") ){
            $area = Location::find(decrypt($id));

            if( $area ){
                return view("backend.modules.location_module.area.modals.view", compact("area"));
            }
            else{
                return "No Area Found";
            }
        }
        else{
            return unauthorized();
        }
    }
    //view function end
}
