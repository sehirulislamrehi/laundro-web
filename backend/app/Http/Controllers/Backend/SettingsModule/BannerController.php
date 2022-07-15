<?php

namespace App\Http\Controllers\Backend\SettingsModule;

use App\Http\Controllers\Controller;
use App\Models\SettingsModule\Banner;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Yajra\DataTables\Facades\DataTables;
use Illuminate\Support\Facades\File;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Str;

class BannerController extends Controller
{
    
    //index function start
    public function index(){
        try{
            if( can("banners") ){
                return view("backend.modules.setting_module.banners.index");
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
            if( can("banners") ){

                $banners = Banner::orderBy('position', 'desc')
                        ->select("id","position","image","title")
                        ->get(); 

                return DataTables::of($banners)
                ->rawColumns(['action', 'image'])
                ->editColumn('image', function(Banner $banner){
                    $url = asset('images/banners/'. $banner->image);

                    return "<img src='$url' width='100px'>";
                })
                ->addColumn('action', function (Banner $banner) {
                    return '
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdown'.$banner->id.'" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Action
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdown'.$banner->id.'">

                            '.( can("edit_banners") ? '
                            <a class="dropdown-item" href="#" data-content="'.route('banner.edit.modal',encrypt($banner->id)).'" data-target="#myModal" class="btn btn-outline-dark" data-toggle="modal">
                                <i class="fas fa-edit"></i>
                                Edit
                            </a>
                            ': '') .'

                            '.( can("delete_banners") ? '
                            <a class="dropdown-item" href="#" data-content="'.route('banner.delete.modal',encrypt($banner->id)).'" data-target="#myModal" class="btn btn-outline-dark" data-toggle="modal">
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
            if( can("add_banners") ){
                return view("backend.modules.setting_module.banners.modals.add");
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
            if( can("add_banners") ){

                $valdiator = Validator::make($request->all(), [
                    "position" => $request->position ? "required|min:1|unique:banners,position|integer" : "",
                    "image" => "required|mimes:jpg,png,jpeg,webp"
                ]);

                if( $valdiator->fails() ){
                    return response()->json(['errors' => $valdiator->errors()], 422);
                }
                else{
                    $banner = new Banner();

                    if( $request->position ){
                        $banner->position = $request->position;
                    }
                    else{
                        $max_position = Banner::max("position") + 1;
                        $banner->position = $max_position;
                    }

                    if( $request->file('image') ){
                        $image = $request->file('image');
                        $img = time().Str::random(12).'.'.$image->getClientOriginalExtension();
                        $location = public_path('images/banners/'.$img);
                        Image::make($image)->save($location);
                        $banner->image = $img;
                    }

                    $banner->title = $request->title;
                    $banner->short_description = $request->short_description;
                    $banner->button_text = $request->button_text;
                    $banner->button_link = $request->button_link;

                    if( $banner->save() ){
                        return response()->json(['success' => 'New banner created'], 200);
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
            if( can("edit_banners") ){
                $banner = Banner::where("id", decrypt($id))->first();
                
                if( $banner ){
                    return view("backend.modules.setting_module.banners.modals.edit", compact('banner'));
                }
                else{
                    return "No Banner Found";
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
            if( can("edit_banners") ){
                $id = decrypt($id);
                $valdiator = Validator::make($request->all(), [
                    "position" => $request->position ? "required|min:1|integer|unique:banners,position,".$id : "",
                    "image" => "mimes:jpg,png,jpeg,webp"
                ]);

                if( $valdiator->fails() ){
                    return response()->json(['errors' => $valdiator->errors()], 422);
                }
                else{
                    $banner = Banner::find($id);

                    if( $banner ){
                        if( $request->position ){
                            $banner->position = $request->position;
                        }
                        else{
                            $max_position = Banner::max("position") + 1;
                            $banner->position = $max_position;
                        }
    
                        if( $request->file('image') ){

                            if( File::exists("images/banners/". $banner->image) ){
                                File::delete("images/banners/". $banner->image);
                            }

                            $image = $request->file('image');
                            $img = time().Str::random(12).'.'.$image->getClientOriginalExtension();
                            $location = public_path('images/banners/'.$img);
                            Image::make($image)->save($location);
                            $banner->image = $img;
                        }
    
                        $banner->title = $request->title;
                        $banner->short_description = $request->short_description;
                        $banner->button_text = $request->button_text;
                        $banner->button_link = $request->button_link;
    
                        if( $banner->save() ){
                            return response()->json(['success' => 'Banner updated'], 200);
                        }
                    }
                    else{
                        return response()->json(['warning' => 'No banner found'], 200);
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
            if( can("delete_banners") ){
                $banner = Banner::where("id", decrypt($id))->first();
                
                if( $banner ){
                    return view("backend.modules.setting_module.banners.modals.delete", compact('banner'));
                }
                else{
                    return "No Banner Found";
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
            if( can("delete_banners") ){
                
                $id = decrypt($id);
                $banner = Banner::find($id);

                if( $banner ){

                    if( File::exists("images/banners/". $banner->image) ){
                        File::delete("images/banners/". $banner->image);
                    }

                    if( $banner->delete() ){
                        return response()->json(['success' => 'Banner deleted'], 200);
                    }

                }
                else{
                    return response()->json(['warning' => 'No banner found'], 200);
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
