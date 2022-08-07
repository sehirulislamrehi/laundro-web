<?php

namespace App\Http\Controllers\Backend\SettingsModule;

use App\Http\Controllers\Controller;
use App\Models\SettingsModule\AppInfo;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

class AppInfoController extends Controller
{
    //index function start
    public function index(){
        if( can("app_info") ){
            $app_info = AppInfo::first();
            return view("backend.modules.setting_module.app_info.index", compact("app_info"));
        }
        else{
            return view("errors.403");
        }
    }
    //index function end

    //update function start
    public function update(Request $request, $id){
        if( can("edit_app_info") ){
            try{
                $app_info = AppInfo::find($id);

                if( $request->logo ){
                    if( File::exists('images/info/'. $app_info->logo) ){
                        File::delete('images/info/'. $app_info->logo);
                    }
                    $image = $request->file('logo');
                    $img = time().Str::random(12).'.'.$image->getClientOriginalExtension();
                    $location = public_path('images/info/'.$img);
                    Image::make($image)->save($location);
                    $app_info->logo = $img;
                }

                if( $request->fav ){
                    if( File::exists('images/info/'. $app_info->fav) ){
                        File::delete('images/info/'. $app_info->fav);
                    }
                    $image = $request->file('fav');
                    $img = time().Str::random(12).'.'.$image->getClientOriginalExtension();
                    $location = public_path('images/info/'.$img);
                    Image::make($image)->save($location);
                    $app_info->fav = $img;
                }

                if( $request->about_large_image ){
                    if( File::exists('images/info/'. $app_info->about_large_image) ){
                        File::delete('images/info/'. $app_info->about_large_image);
                    }
                    $image = $request->file('about_large_image');
                    $img = time().Str::random(12).'.'.$image->getClientOriginalExtension();
                    $location = public_path('images/info/'.$img);
                    Image::make($image)->save($location);
                    $app_info->about_large_image = $img;
                }

                if( $request->about_left_image ){
                    if( File::exists('images/info/'. $app_info->about_left_image) ){
                        File::delete('images/info/'. $app_info->about_left_image);
                    }
                    $image = $request->file('about_left_image');
                    $img = time().Str::random(12).'.'.$image->getClientOriginalExtension();
                    $location = public_path('images/info/'.$img);
                    Image::make($image)->save($location);
                    $app_info->about_left_image = $img;
                }

                if( $request->about_right_image ){
                    if( File::exists('images/info/'. $app_info->about_right_image) ){
                        File::delete('images/info/'. $app_info->about_right_image);
                    }
                    $image = $request->file('about_right_image');
                    $img = time().Str::random(12).'.'.$image->getClientOriginalExtension();
                    $location = public_path('images/info/'.$img);
                    Image::make($image)->save($location);
                    $app_info->about_right_image = $img;
                }

                if( $request->home_contact_image ){
                    if( File::exists('images/info/'. $app_info->home_contact_image) ){
                        File::delete('images/info/'. $app_info->home_contact_image);
                    }
                    $image = $request->file('home_contact_image');
                    $img = time().Str::random(12).'.'.$image->getClientOriginalExtension();
                    $location = public_path('images/info/'.$img);
                    Image::make($image)->save($location);
                    $app_info->home_contact_image = $img;
                }

                if( $request->breadcum_image ){
                    if( File::exists('images/info/'. $app_info->breadcum_image) ){
                        File::delete('images/info/'. $app_info->breadcum_image);
                    }
                    $image = $request->file('breadcum_image');
                    $img = time().Str::random(12).'.'.$image->getClientOriginalExtension();
                    $location = public_path('images/info/'.$img);
                    Image::make($image)->save($location);
                    $app_info->breadcum_image = $img;
                }
                
                $app_info->mail_from_address = $request->mail_from_address;
                $app_info->email = $request->email;
                $app_info->phone = $request->phone;
                $app_info->address = $request->address;
                $app_info->city = $request->city;
                $app_info->country = $request->country;
                $app_info->day = $request->day;
                $app_info->timing = $request->timing;
                $app_info->facebook_link = $request->facebook_link;
                $app_info->youtube_link = $request->youtube_link;
                $app_info->twitter_link = $request->twitter_link;
                $app_info->linkedin_link = $request->linkedin_link;

                $app_info->about_title_one = $request->about_title_one;
                $app_info->about_title_two = $request->about_title_two;
                $app_info->about_title_three = $request->about_title_three;
                $app_info->about_point_one = $request->about_point_one;
                $app_info->about_point_two = $request->about_point_two;
                $app_info->about_point_three = $request->about_point_three;
                $app_info->about_point_four = $request->about_point_four;

                $app_info->count_one = $request->count_one;
                $app_info->count_two = $request->count_two;
                $app_info->count_three = $request->count_three;
                $app_info->count_four = $request->count_four;

                $app_info->footer_content = $request->footer_content;
                $app_info->footer_map = $request->footer_map;

                if( $app_info->save() ){
                    return response()->json(['success' => 'App Info Updated'], 200);
                }

            }
            catch( Exception $e ){
                return response()->json(['error' => $e->getMessage()], 200);
            }
        }
        else{
            return response()->json(['warning' => unauthorized()], 200);
        }
    }
    //update function end
}
