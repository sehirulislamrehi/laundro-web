<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\SettingsModule\Banner;
use App\Models\SettingsModule\Faq;
use Exception;
use Illuminate\Http\Request;

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
}
