<?php

namespace App\Http\Controllers\Backend\SettingsModule\Testimonial;

use App\Http\Controllers\Controller;
use App\Models\SettingsModule\Testimonial;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Yajra\DataTables\Facades\DataTables;
use Illuminate\Support\Facades\File;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Str;

class TestimonialController extends Controller
{
    //index funciton start
    public function index(){
        try{
            if( can("testimonials") ){
                return view("backend.modules.setting_module.testimonials.index");
            }
            else{
                return view('errors.403');
            }
        }
        catch( Exception $e ){
            return back()->with('error', $e->getMessage());
        }
    }
    //index funciton end


    //data function start
    public function data(){
        try{
            if( can("testimonials") ){
                $testimonials = Testimonial::orderBy('position', 'desc')
                        ->select("id","position","image","name","designation")
                        ->get(); 

                return DataTables::of($testimonials)
                ->rawColumns(['action', 'image'])
                ->editColumn('image', function(Testimonial $testimonial){
                    $url = asset('images/testimonials/'. $testimonial->image);

                    return "<img src='$url' width='100px'>";
                })
                ->addColumn('action', function (Testimonial $testimonial) {
                    return '
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdown'.$testimonial->id.'" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Action
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdown'.$testimonial->id.'">

                            '.( can("edit_banners") ? '
                            <a class="dropdown-item" href="#" data-content="'.route('testimonial.edit.modal',encrypt($testimonial->id)).'" data-target="#myModal" class="btn btn-outline-dark" data-toggle="modal">
                                <i class="fas fa-edit"></i>
                                Edit
                            </a>
                            ': '') .'

                            '.( can("delete_banners") ? '
                            <a class="dropdown-item" href="#" data-content="'.route('testimonial.delete.modal',encrypt($testimonial->id)).'" data-target="#myModal" class="btn btn-outline-dark" data-toggle="modal">
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
            if( can("add_testimonials") ){
                return view("backend.modules.setting_module.testimonials.modals.add");
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
            if( can("add_testimonials") ){
                $valdiator = Validator::make($request->all(), [
                    "position" => $request->position ? "min:1|unique:testimonials,position|integer" : "",
                    "image" => "required|mimes:jpg,png,jpeg,webp",
                    "name" => "required",
                    "designation" => "required",
                    "comments" => "required",
                ]);

                if( $valdiator->fails() ){
                    return response()->json(['errors' => $valdiator->errors()], 422);
                }
                else{
                    $testimonial = new Testimonial();

                    if( $request->position ){
                        $testimonial->position = $request->position;
                    }
                    else{
                        $max_position = Testimonial::max("position") + 1;
                        $testimonial->position = $max_position;
                    }

                    if( $request->file('image') ){
                        $image = $request->file('image');
                        $img = time().Str::random(12).'.'.$image->getClientOriginalExtension();
                        $location = public_path('images/testimonials/'.$img);
                        Image::make($image)->save($location);
                        $testimonial->image = $img;
                    }

                    $testimonial->name = $request->name;
                    $testimonial->designation = $request->designation;
                    $testimonial->comments = $request->comments;

                    if( $testimonial->save() ){
                        return response()->json(['success' => 'New testimonial created'], 200);
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
            if( can("edit_testimonials") ){
                $testimonial = Testimonial::find(decrypt($id));

                if( $testimonial ){
                    return view("backend.modules.setting_module.testimonials.modals.edit", compact('testimonial'));
                }
                else{
                    return "No testimonial found";
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
            if( can("edit_testimonials") ){
                $id = decrypt($id);
                $valdiator = Validator::make($request->all(), [
                    "position" => $request->position ? "min:1|integer|unique:testimonials,position,".$id : "",
                    "image" => "mimes:jpg,png,jpeg,webp",
                    "name" => "required",
                    "designation" => "required",
                    "comments" => "required",
                ]);

                if( $valdiator->fails() ){
                    return response()->json(['errors' => $valdiator->errors()], 422);
                }
                else{
                    $testimonial = Testimonial::find($id);

                    if( $testimonial ){

                        if( $request->position ){
                            $testimonial->position = $request->position;
                        }
    
                        if( $request->file('image') ){

                            if( File::exists("images/testimonials/". $testimonial->image) ){
                                File::delete("images/testimonials/". $testimonial->image);
                            }

                            $image = $request->file('image');
                            $img = time().Str::random(12).'.'.$image->getClientOriginalExtension();
                            $location = public_path('images/testimonials/'.$img);
                            Image::make($image)->save($location);
                            $testimonial->image = $img;
                        }
    
                        $testimonial->name = $request->name;
                        $testimonial->designation = $request->designation;
                        $testimonial->comments = $request->comments;
    
                        if( $testimonial->save() ){
                            return response()->json(['success' => 'Testimonial updated'], 200);
                        }
                    }
                    else{

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
            if( can("delete_testimonials") ){
                $testimonial = Testimonial::find(decrypt($id));

                if( $testimonial ){
                    return view("backend.modules.setting_module.testimonials.modals.delete", compact('testimonial'));
                }
                else{
                    return "No testimonial found";
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
            if( can("delete_testimonials") ){
                
                $id = decrypt($id);
                $testimonial = Testimonial::find($id);

                if( $testimonial ){

                    if( File::exists("images/testimonials/". $testimonial->image) ){
                        File::delete("images/testimonials/". $testimonial->image);
                    }

                    if( $testimonial->delete() ){
                        return response()->json(['success' => 'Testimonial deleted'], 200);
                    }

                }
                else{
                    return response()->json(['warning' => 'No testimonial found'], 200);
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
