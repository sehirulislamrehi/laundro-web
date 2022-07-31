<?php

namespace App\Http\Controllers\Backend\SettingsModule\Testimonial;

use App\Http\Controllers\Controller;
use Exception;
use Illuminate\Http\Request;

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
}
