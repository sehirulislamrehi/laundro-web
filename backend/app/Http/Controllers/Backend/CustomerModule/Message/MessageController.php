<?php

namespace App\Http\Controllers\Backend\CustomerModule\Message;

use App\Http\Controllers\Controller;
use Exception;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    //index function start
    public function index(Request $request){
        try{
            if( can("all_message") ){
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
