<?php

namespace App\Http\Controllers\Backend\LocationModule\Emirate;

use App\Http\Controllers\Controller;
use App\Models\LocationModule\Location;
use Exception;
use Illuminate\Http\Request;
use Yajra\DataTables\Facades\DataTables;

use Validator;

class EmirateController extends Controller
{
    //index function start
    public function index(){
        try{
            if( can("emirates") ){
                $emirates = Location::orderBy('id', 'asc')->where('location_id', null)->get();
                return view("backend.modules.location_module.emirates.index",compact('emirates'));
            }
            else{
                return view("errors.403");
            }
        }
        catch( Exception $e ){
            return back()->with('error', $e->getMessage());
        }
    }


    //emirate add modal start
    public function add_modal(){
        if( can('add_emirates') ){
            return view("backend.modules.location_module.emirates.modals.add");
        }
        else{
            return unauthorized();
        }
    }


    //data start
    public function data(){
        if( can('emirates') ){
            $emirates = Location::orderBy('id', 'desc')
                        ->select("id","name","location_id","type","is_active")
                        ->where('location_id', null)
                        ->get(); 
            return DataTables::of($emirates)
            ->rawColumns(['action', 'is_active','name'])
            ->editColumn('name', function(Location $emirate){

                return $emirate->name;
            })
            ->editColumn('is_active', function (Location $emirate) {
                if ($emirate->is_active == true) {
                    return '<p class="badge badge-success">Active</p>';
                } else {
                    return '<p class="badge badge-danger">Inactive</p>';
                }
            })
            ->addColumn('action', function (Location $emirate) {
                return '
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdown'.$emirate->id.'" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Action
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdown'.$emirate->id.'">

                        '.( can("edit_emirates") ? '
                        <a class="dropdown-item" href="#" data-content="'.route('emirate.edit',$emirate->id).'" data-target="#myModal" class="btn btn-outline-dark" data-toggle="modal">
                            <i class="fas fa-edit"></i>
                            Edit
                        </a>
                        ': '') .'

                        '.( can("view_emirates") ? '
                        <a class="dropdown-item" href="#" data-content="'.route('emirate.view',encrypt($emirate->id)).'" data-target="#myModal" class="btn btn-outline-dark" data-toggle="modal">
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
        if( can('add_emirate') ){
            $validator = Validator::make($request->all(),[
                'name'      => 'required|unique:locations,name',
                'is_active' => 'required',
            ]);
            

           if( $validator->fails() ){
               return response()->json(['errors' => $validator->errors()] ,422);
           }else{
                try{
                    $emirate            = new Location();
                    $emirate->name      = $request->name;
                    $emirate->is_active = $request->is_active;
                    
                    if( $emirate->save() ){
                        return response()->json(['success' => 'New City '.$emirate->name.' Created Successfully'], 200);
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
        if( can("edit_emirates") ){
            $emirate = Location::where("id",$id)->select("id","name","location_id","type","is_active")->first();
            return view("backend.modules.location_module.emirates.modals.edit", compact("emirate"));
        }
        else{
            return unauthorized();
        }
    }

    //update modal start
    public function update(Request $request, $id){
        if( can('edit_emirates') ){

            $validator = Validator::make($request->all(),[
                'name'      => 'required|unique:locations,name,'. $id,
                'is_active' => 'required',
            ]);

           if( $validator->fails() ){
               return response()->json(['errors' => $validator->errors()] ,422);
           }else{
                try{
                    $emirate = Location::find($id);
                    $emirate->name      = $request->name;
                    $emirate->is_active = $request->is_active;

                    if( $emirate->save() ){
                        return response()->json(['success' => $emirate->name . "'s Updated Successfully"], 200);
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
        if( can("view_emirates") ){
            $emirate = Location::find(decrypt($id));

            if( $emirate ){
                return view("backend.modules.location_module.emirates.modals.view", compact("emirate"));
            }
            else{
                return "No Emirates Found";
            }
        }
        else{
            return unauthorized();
        }
    }
    //view function end
}
