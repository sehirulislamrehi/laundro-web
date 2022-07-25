<?php

namespace App\Http\Controllers\Backend\CustomerModule\Subscriber;

use App\Http\Controllers\Controller;
use Exception;
use Illuminate\Http\Request;

class SubscriberController extends Controller
{
    //index function start
    public function index(Request $request){
        try{
            if( can("all_subscriber") ){
                return view("errors.404");
            }
            else{
                return view("errors.404");
            }
        }
        catch( Exception $e ){
            return back()->with('error', $e->getMessage());
        }
    }
    //index function end
}
