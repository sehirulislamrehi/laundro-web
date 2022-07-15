<?php

namespace App\Http\Controllers\Backend\SettingsModule\Faq;

use App\Http\Controllers\Controller;
use App\Models\SettingsModule\Faq;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Yajra\DataTables\Facades\DataTables;
use Illuminate\Support\Str;

class FaqController extends Controller
{
    
    //index function start
    public function index(){
        try{
            if( can("faq") ){
                return view("backend.modules.setting_module.faq.index");
            }
            else{
                return view("errors.403");
            }
        }
        catch( Exception $e ){
            return back()->with('error', $e->getMessage());
        }
    }
    //index function end


    //data function start
    public function data(){
        try{
            if( can("faq") ){

                $faq = Faq::orderBy('position', 'desc')
                        ->select("id","position","question","answer","is_active")
                        ->get(); 

                return DataTables::of($faq)
                ->rawColumns(['action', 'question','answer','status'])
                ->editColumn('question', function(Faq $faq){
                    return Str::limit($faq->question,20);
                })
                ->editColumn('answer', function(Faq $faq){
                    return Str::limit($faq->answer,20);
                })
                ->editColumn('status', function (Faq $faq) {
                    if ($faq->is_active == true) {
                        return '<p class="badge badge-success">Active</p>';
                    } else {
                        return '<p class="badge badge-danger">Inactive</p>';
                    }
                })
                ->addColumn('action', function (Faq $faq) {
                    return '
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdown'.$faq->id.'" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Action
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdown'.$faq->id.'">

                            '.( can("edit_faq") ? '
                            <a class="dropdown-item" href="#" data-content="'.route('faq.edit.modal',encrypt($faq->id)).'" data-target="#myModal" class="btn btn-outline-dark" data-toggle="modal">
                                <i class="fas fa-edit"></i>
                                Edit
                            </a>
                            ': '') .'

                            '.( can("delete_faq") ? '
                            <a class="dropdown-item" href="#" data-content="'.route('faq.delete.modal',encrypt($faq->id)).'" data-target="#myModal" class="btn btn-outline-dark" data-toggle="modal">
                                <i class="fas fa-trash"></i>
                                Delete
                            </a>
                            ': '') .'

                        </div>
                    </div>
                    ';
                })
                ->addIndexColumn()
                ->make(true);

            }
            else{
                return response()->json(['warning' => unauthorized()], 200);
            }
        }
        catch( Exception $e ){
            return response()->json(['error' => $e->getMessage()], 200);
        }
    }
    //data function end


    //add_modal function start
    public function add_modal(){
        try{
            if( can("add_faq") ){
                return view("backend.modules.setting_module.faq.modals.add");
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
            if( can("add_faq") ){

                $valdiator = Validator::make($request->all(), [
                    "position" => $request->position ? "required|min:1|unique:faqs,position|integer" : "",
                    "question" => "required",
                    "answer" => "required",
                    "is_active" => "required|integer|in:0,1",
                ]);

                if( $valdiator->fails() ){
                    return response()->json(['errors' => $valdiator->errors()], 422);
                }
                else{
                    $faq = new Faq();

                    if( $request->position ){
                        $faq->position = $request->position;
                    }
                    else{
                        $max_position = Faq::max("position") + 1;
                        $faq->position = $max_position;
                    }

                    $faq->question = $request->question;
                    $faq->answer = $request->answer;
                    $faq->is_active = $request->is_active;

                    if( $faq->save() ){
                        return response()->json(['success' => 'New faq created'], 200);
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
            if( can("edit_faq") ){
                $faq = Faq::where("id", decrypt($id))->first();
                
                if( $faq ){
                    return view("backend.modules.setting_module.faq.modals.edit", compact('faq'));
                }
                else{
                    return "No Faq Found";
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
    public function edit(Request $request,$id){
        try{
            if( can("edit_faq") ){
                $id = decrypt($id);
                $valdiator = Validator::make($request->all(), [
                    "position" => $request->position ? "required|min:1|integer|unique:faqs,position,". $id : "",
                    "question" => "required",
                    "answer" => "required",
                    "is_active" => "required|integer|in:0,1",
                ]);

                if( $valdiator->fails() ){
                    return response()->json(['errors' => $valdiator->errors()], 422);
                }
                else{
                    $faq = Faq::find($id);

                    if( $faq ){
                        if( $request->position ){
                            $faq->position = $request->position;
                        }
                        else{
                            $max_position = Faq::max("position") + 1;
                            $faq->position = $max_position;
                        }
    
                        $faq->question = $request->question;
                        $faq->answer = $request->answer;
                        $faq->is_active = $request->is_active;
    
                        if( $faq->save() ){
                            return response()->json(['success' => 'Faq updated'], 200);
                        }
                    }
                    else{
                        return response()->json(['warning' => 'No faq found'], 200);
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


     //delete_modal function start
     public function delete_modal($id){
        try{
            if( can("delete_faq") ){
                $faq = Faq::where("id", decrypt($id))->first();
                
                if( $faq ){
                    return view("backend.modules.setting_module.faq.modals.delete", compact('faq'));
                }
                else{
                    return "No Faq Found";
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
    //delete_modal function end


    //delete function start
    public function delete($id){
        try{
            if( can("delete_faq") ){
                
                $id = decrypt($id);
                $faq = Faq::find($id);

                if( $faq ){

                    if( $faq->delete() ){
                        return response()->json(['success' => 'Faq deleted'], 200);
                    }

                }
                else{
                    return response()->json(['warning' => 'No faq found'], 200);
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
    //delete function end
}
