<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\SettingsModule\AppInfo;
use App\Models\SettingsModule\Banner;
use App\Models\SettingsModule\CustomPage;
use App\Models\SettingsModule\Faq;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\SettingsModule\ContactForm;

class ApiController extends Controller
{
    
    //banner_data function start
    public function banner_data(){
        try{
            $banners = Banner::orderBy("position","asc")->select("image","title","short_description","button_text","button_link")->get();
            return response()->json([
                'status' => 'success',
                'data' => $banners
            ],200);
        }
        catch( Exception $e ){
            return response()->json([
                'status' => 'error',
                'data' => $e->getMessage()
            ],200);
        }
    }
    //banner_data function end


    //faq_data function start
    public function faq_data(){
        try{
            $faqs = Faq::orderBy("position","asc")->where("is_active", true)->select("question","answer")->get();
            return response()->json([
                'status' => 'success',
                'data' => $faqs
            ],200);
        }
        catch( Exception $e ){
            return response()->json([
                'status' => 'error',
                'data' => $e->getMessage()
            ],200);
        }
    }
    //faq_data function end


    //custom_page function start
    public function custom_page(){
        try{
            $custom_page = CustomPage::orderBy("position","asc")->where("is_active", true)->select("name","slug")->get();
            return response()->json([
                'status' => 'success',
                'data' => $custom_page
            ],200);
        }
        catch( Exception $e ){
            return response()->json([
                'status' => 'error',
                'data' => $e->getMessage()
            ],200);
        }
    }
    //custom_page function end


    //custom_page_details function start
    public function custom_page_details($slug){
        try{
            $custom_page = CustomPage::where("slug", $slug)->select("name","content")->first();

            if( $custom_page ){
                return response()->json([
                    'status' => 'success',
                    'data' => $custom_page
                ],200);
            }
            else{
                return response()->json([
                    'status' => 'warning',
                    'data' => 'No data found'
                ],200);
            }
            
        }
        catch( Exception $e ){
            return response()->json([
                'status' => 'error',
                'data' => $e->getMessage()
            ],200);
        }
    }
    //custom_page_details function end


    //application_data function start
    public function application_data(){
        try{
            $app_info = AppInfo::first();
            return response()->json([
                'status' => 'success',
                'data' => $app_info
            ],200);
        }
        catch( Exception $e ){
            return response()->json([
                'status' => 'error',
                'data' => $e->getMessage()
            ],200);
        }
    }
    //application_data function end
    
    
    //contact_form function start
    public function contact_form(Request $request){
        try{
            $validator = Validator::make($request->all(),[
                "name" => "required",
                "email" => "required",
                "phone" => "required",
                "subject" => "required",
                "message" => "required",
            ]);
            
            if( $validator->fails() ){
                return response()->json([
                    'status' => 'validation_error',
                    'data' => $validator->errors()
                ],200); 
            }
            else{
                $contact_form = new ContactForm();
                
                $contact_form->name = $request->name;
                $contact_form->email = $request->email;
                $contact_form->phone = $request->phone;
                $contact_form->subject = $request->subject;
                $contact_form->message = $request->message;
                
                if( $contact_form->save() ){
                    return response()->json([
                        'status' => 'success',
                        'data' => 'Thanks for contact with us'
                    ],200);
                }
            }
        }
        catch( Exception $e ){
            return response()->json([
                'status' => 'error',
                'data' => $e->getMessage()
            ],200);
        }
    }
    //contact_form function end
}
