<?php

namespace App\Http\Controllers\Backend\SettingsModule\CustomPage;

use App\Http\Controllers\Controller;
use App\Models\SettingsModule\CustomPage;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Yajra\DataTables\Facades\DataTables;
use Illuminate\Support\Str;

class CustomPageController extends Controller
{
    
    //index function start
    public function index(){
        try{
            if( can("custom_page") ){
                return view("backend.modules.setting_module.custom_page.index");
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
            if( can("custom_page") ){

                $custom_Page = CustomPage::orderBy('position', 'desc')
                        ->select("id","position","name","is_active")
                        ->get(); 

                return DataTables::of($custom_Page)
                ->rawColumns(['action','status'])
                ->editColumn('status', function (CustomPage $custom_Page) {
                    if ($custom_Page->is_active == true) {
                        return '<p class="badge badge-success">Active</p>';
                    } else {
                        return '<p class="badge badge-danger">Inactive</p>';
                    }
                })
                ->addColumn('action', function (CustomPage $custom_Page) {
                    return '
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdown'.$custom_Page->id.'" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Action
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdown'.$custom_Page->id.'">

                            '.( can("edit_custom_page") ? '
                            <a class="dropdown-item" href="#" data-content="'.route('custom_page.edit.modal',encrypt($custom_Page->id)).'" data-target="#largeModal" class="btn btn-outline-dark" data-toggle="modal">
                                <i class="fas fa-edit"></i>
                                Edit
                            </a>
                            ': '') .'

                            '.( can("delete_custom_page") ? '
                            <a class="dropdown-item" href="#" data-content="'.route('custom_page.delete.modal',encrypt($custom_Page->id)).'" data-target="#myModal" class="btn btn-outline-dark" data-toggle="modal">
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
            if( can("add_custom_page") ){
                return view("backend.modules.setting_module.custom_page.modals.add");
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
            if( can("add_custom_page") ){

                $valdiator = Validator::make($request->all(), [
                    "position" => $request->position ? "required|min:1|unique:custom_pages,position|integer" : "",
                    "name" => "required|unique:custom_pages,name",
                    "content" => "required",
                    "is_active" => "required|integer|in:0,1",
                ]);

                if( $valdiator->fails() ){
                    return response()->json(['errors' => $valdiator->errors()], 422);
                }
                else{
                    $custom_page = new CustomPage();

                    if( $request->position ){
                        $custom_page->position = $request->position;
                    }
                    else{
                        $max_position = CustomPage::max("position") + 1;
                        $custom_page->position = $max_position;
                    }

                    $custom_page->name = $request->name;
                    $custom_page->slug = Str::slug($request->name);
                    $custom_page->content = $request->content;
                    $custom_page->is_active = $request->is_active;

                    if( $custom_page->save() ){
                        return response()->json(['success' => 'New page created'], 200);
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
            if( can("edit_custom_page") ){
                $custom_page = CustomPage::where("id", decrypt($id))->first();
                
                if( $custom_page ){
                    return view("backend.modules.setting_module.custom_page.modals.edit", compact('custom_page'));
                }
                else{
                    return "No page Found";
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
            if( can("edit_custom_page") ){
                $id = decrypt($id);
                $valdiator = Validator::make($request->all(), [
                    "position" => $request->position ? "required|min:1|integer|unique:custom_pages,position,". $id : "",
                    "name" => "required|unique:custom_pages,name,". $id,
                    "content" => "required",
                    "is_active" => "required|integer|in:0,1",
                ]);

                if( $valdiator->fails() ){
                    return response()->json(['errors' => $valdiator->errors()], 422);
                }
                else{
                    $custom_page = CustomPage::find($id);

                    if( $custom_page ){
                        if( $request->position ){
                            $custom_page->position = $request->position;
                        }
                        else{
                            $max_position = CustomPage::max("position") + 1;
                            $custom_page->position = $max_position;
                        }
    
                        $custom_page->name = $request->name;
                        $custom_page->slug = Str::slug($request->name);
                        $custom_page->content = $request->content;
                        $custom_page->is_active = $request->is_active;
    
                        if( $custom_page->save() ){
                            return response()->json(['success' => 'Page updated'], 200);
                        }
                    }
                    else{
                        return response()->json(['warning' => 'No page found'], 200);
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
            if( can("delete_custom_page") ){
                $custom_page = CustomPage::where("id", decrypt($id))->first();
                
                if( $custom_page ){
                    return view("backend.modules.setting_module.custom_page.modals.delete", compact('custom_page'));
                }
                else{
                    return "No Page Found";
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
            if( can("delete_custom_page") ){
                
                $id = decrypt($id);
                $custom_page = CustomPage::find($id);

                if( $custom_page ){

                    if( $custom_page->delete() ){
                        return response()->json(['success' => 'Page deleted'], 200);
                    }

                }
                else{
                    return response()->json(['warning' => 'No page found'], 200);
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
