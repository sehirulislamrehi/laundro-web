<?php

namespace App\Http\Controllers\Backend\ServiceModule\Duration;

use App\Http\Controllers\Controller;
use App\Models\ServiceModule\Duration;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Yajra\DataTables\Facades\DataTables;

class DurationController extends Controller
{
    //index function start
    public function index(){
        try{
            if( can("duration") ){
                return view("backend.modules.service_module.duration.index");
            }
            else{
                return view('errors.403');
            }
        }
        catch( Exception $e ){
            return back()->with('warning',$e->getMessage());
        }
    }
    //index function end


    //data function start
    public function data(){
        try{
            if( can('duration') ){
                $duration = Duration::orderBy('id', 'desc')
                            ->select("id","duration","type","is_active")
                            ->get(); 
    
                return DataTables::of($duration)
                ->rawColumns(['action', 'is_active','duration'])
                ->editColumn('duration', function(Duration $duration){
                    return $duration->duration .' '. $duration->type ;
                })
                ->editColumn('is_active', function (Duration $duration) {
                    if ($duration->is_active == true) {
                        return '<p class="badge badge-success">Active</p>';
                    } else {
                        return '<p class="badge badge-danger">Inactive</p>';
                    }
                })
                ->addColumn('action', function (Duration $duration) {
                    return '
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdown'.$duration->id.'" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Action
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdown'.$duration->id.'">
    
                            '.( can("edit_duration") ? '
                            <a class="dropdown-item" href="#" data-content="'.route('duration.edit.modal',encrypt($duration->id)).'" data-target="#myModal" class="btn btn-outline-dark" data-toggle="modal">
                                <i class="fas fa-edit"></i>
                                Edit
                            </a>
                            ': '') .'

                            '.( can("view_duration") ? '
                            <a class="dropdown-item" href="#" data-content="'.route('duration.view.modal',encrypt($duration->id)).'" data-target="#myModal" class="btn btn-outline-dark" data-toggle="modal">
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
        catch( Exception $e ){
            return response()->json(['error' => $e->getMessage()],200);
        }
    }
    //data function end


    //add_modal function start
    public function add_modal(){
        try{
            if( can("add_duration") ){
                return view("backend.modules.service_module.duration.modals.add");
            }
            else{
                return unauthorized();
            }
        }
        catch( Exception $e ){
            return $e->getMessage();
        }
    }
    //add_modal function end


    //add function start
    public function add(Request $request){
        try{
            if( can("add_duration") ){
                $validator = Validator::make($request->all(),[
                    "duration" => "required|min:0|unique:durations,duration",
                    "type" => "required|in:Hour"
                ]);

                if( $validator->fails() ){
                    return response()->json(['errors' => $validator->errors()], 422);
                }
                else{

                    $split = explode(".",$request->duration);

                    if( isset($split[1]) ){
                        if( $split[1] != 5 && $split[1] != 0 ){
                            return response()->json(['warning' => 'Invalid Duration.'], 200);
                        }
                    }

                    if( $request->duration == 0 ){
                        return response()->json(['warning' => 'Invalid Duration.'], 200);
                    }

                    $duration = new Duration();
                    $duration->duration = $request->duration;
                    $duration->type = $request->type;
                    $duration->is_active = true;

                    if( $duration->save() ){
                        return response()->json(['success' => 'Duration Created'], 200);
                    }
                }

            }
            else{
                return response()->json(['warning' => unauthorized()], 200);
            }
        }
        catch( Exception $e ){
            return response()->json(['error' => $e->getMessage()], 200);

        }
    }
    //add function end


    //edit_modal function start
    public function edit_modal($id){
        try{
            if( can("edit_duration") ){
                $duration = Duration::where("id",decrypt($id))->select("id","duration","is_active","type")->first();

                if( $duration ){
                    return view("backend.modules.service_module.duration.modals.edit",compact("duration"));
                }
                else{
                    return "No Duration Found";
                }
            }
            else{
                return unauthorized();
            }
        }
        catch( Exception $e ){
            return $e->getMessage();
        }
    } 
    //edit_modal function end


    //edit function start
    public function edit(Request $request, $id){
        try{
            if( can("edit_duration") ){
                $id = decrypt($id);
                $validator = Validator::make($request->all(),[
                    "duration" => "required|min:0|unique:durations,duration,". $id,
                    "type" => "required|in:Hour"
                ]);

                if( $validator->fails() ){
                    return response()->json(['errors' => $validator->errors()], 422);
                }
                else{
                    $duration = Duration::find($id);

                    if( $duration ){

                        $split = explode(".",$request->duration);

                        if( isset($split[1]) ){
                            if( $split[1] != 5 && $split[1] != 0 ){
                                return response()->json(['warning' => 'Invalid Duration.'], 200);
                            }
                        }

                        if( $request->duration == 0 ){
                            return response()->json(['warning' => 'Invalid Duration.'], 200);
                        }

                        $duration->duration = $request->duration;
                        $duration->is_active = $request->is_active;
    
                        if( $duration->save() ){
                            return response()->json(['success' => 'Duration Updated'], 200);
                        }
                    }
                    else{
                        return response()->json(['warning' => 'No Duration Found'], 200);
                    }
                    
                }

            }
            else{
                return response()->json(['warning' => unauthorized()], 200);
            }
        }
        catch( Exception $e ){
            return response()->json(['error' => $e->getMessage()], 200);

        }
    }
    //edit function end


    //view_modal function start
    public function view_modal($id){
        try{
            if( can("view_duration") ){
                $duration = Duration::where("id",decrypt($id))->first();

                if( $duration ){
                    return view("backend.modules.service_module.duration.modals.view",compact("duration"));
                }
                else{
                    return "No Duration Found";
                }
            }
            else{
                return unauthorized();
            }
        }
        catch( Exception $e ){
            return $e->getMessage();
        }
    } 
    //view_modal function end
}
