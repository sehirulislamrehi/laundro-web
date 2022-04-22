<?php

namespace App\Http\Controllers\Backend\LocationModule\Zone;

use App\Http\Controllers\Controller;
use App\Models\LocationModule\Location;
use Exception;
use Illuminate\Http\Request;
use Yajra\DataTables\Facades\DataTables;

use Validator;

class ZoneController extends Controller
{
    //index function start
    public function index(){
        try{
            if( can("zones") ){
                $zones = Location::orderBy('id', 'asc')->where('type', 'zone')->get();
                $areas = Location::orderBy('id', 'asc')->where('type', 'area')->get();
                return view("backend.modules.location_module.zone.index",compact('zones', 'areas'));
            }
            else{
                return view("errors.403");
            }
        }
        catch( Exception $e ){
            return back()->with('error', $e->getMessage());
        }
    }


    //data start
    public function data(){
        if( can('zones') ){
            $zones = Location::orderBy('id', 'desc')
                        ->where('type', 'zone')
                        ->select("id","name","location_id","type","is_active")
                        ->get(); 
            return DataTables::of($zones)
            ->rawColumns(['action', 'is_active','name', 'parent'])
            ->editColumn('name', function(Location $zone){

                return $zone->name;
            })
            ->editColumn('parent', function(Location $zone){

                return $zone->parent ? $zone->parent->name : '';
            })
            ->editColumn('is_active', function (Location $zone) {
                if ($zone->is_active == true) {
                    return '<p class="badge badge-success">Active</p>';
                } else {
                    return '<p class="badge badge-danger">Inactive</p>';
                }
            })
            ->addColumn('action', function (Location $zone) {
                return '
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdown'.$zone->id.'" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Action
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdown'.$zone->id.'">

                        '.( can("edit_zones") ? '
                        <a class="dropdown-item" href="#" data-content="'.route('zone.edit',$zone->id).'" data-target="#myModal" class="btn btn-outline-dark" data-toggle="modal">
                            <i class="fas fa-edit"></i>
                            Edit
                        </a>
                        ': '') .'

                        '.( can("view_zones") ? '
                        <a class="dropdown-item" href="#" data-content="'.route('zone.view',encrypt($zone->id)).'" data-target="#myModal" class="btn btn-outline-dark" data-toggle="modal">
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


    //zone add modal start
    public function add_modal(){
        if( can('add_zones') ){
            return view("backend.modules.location_module.zone.modals.add");
        }
        else{
            return unauthorized();
        }
    }


    

    //add start
    public function add(Request $request){
        if( can('add_zones') ){
            $validator = Validator::make($request->all(),[
                'name'      => 'required|unique:locations,name',
                'is_active' => 'required',
                'location_id' => 'required',
            ]);
            

           if( $validator->fails() ){
               return response()->json(['errors' => $validator->errors()] ,422);
           }else{
                try{
                    $zone              = new Location();
                    $zone->name        = $request->name;
                    $zone->location_id = $request->location_id;
                    $zone->type        = 'zone';
                    $zone->is_active   = $request->is_active;
                    
                    if( $zone->save() ){
                        return response()->json(['success' => 'New Zone '.$zone->name.' Created Successfully'], 200);
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
        if( can("edit_zones") ){
            $zone = Location::where("id",$id)->select("id","name","location_id","type","is_active")->first();
            return view("backend.modules.location_module.zone.modals.edit", compact("zone"));
        }
        else{
            return unauthorized();
        }
    }

    //update modal start
    public function update(Request $request, $id){
        if( can('edit_zones') ){

            $validator = Validator::make($request->all(),[
                'name'      => 'required|unique:locations,name,'. $id,
                'is_active' => 'required',
            ]);

           if( $validator->fails() ){
               return response()->json(['errors' => $validator->errors()] ,422);
           }else{
                try{
                    $zone = Location::find($id);
                    $zone->name        = $request->name;
                    $zone->location_id = $request->location_id;
                    $zone->type        = 'zone';
                    $zone->is_active   = $request->is_active;

                    if( $zone->save() ){
                        return response()->json(['success' => $zone->name . "'s Updated Successfully"], 200);
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
        if( can("view_zones") ){
            $zone = Location::find(decrypt($id));

            if( $zone ){
                return view("backend.modules.location_module.zone.modals.view", compact("zone"));
            }
            else{
                return "No Zone Found";
            }
        }
        else{
            return unauthorized();
        }
    }
    //view function end
}
