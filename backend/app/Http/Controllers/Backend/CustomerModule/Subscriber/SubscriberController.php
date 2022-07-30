<?php

namespace App\Http\Controllers\Backend\CustomerModule\Subscriber;

use App\Http\Controllers\Controller;
use App\Models\CustomerModule\Subscriber;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SubscriberController extends Controller
{
    //index function start
    public function index(Request $request){
        try{
            if( can("all_subscriber") ){
                $subscribers = Subscriber::orderBy("id","desc")->select("id","email")->paginate(10);

                return view("backend.modules.customer_module.subscriber.index", compact('subscribers'));
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


    //delete function start
    public function delete(Request $request){
        try{
            if( can("delete_subscribers") ){

                if( $request->subscriber_ids ){
                    $contact_form = Subscriber::whereIn("id",$request->subscriber_ids)->delete();
                    return back()->with('success', "Selected item deleted");
                }
                else{
                    return back()->with('success', "Noting to deleted");
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
    //delete function end


     //delete_all function start
     public function delete_all(Request $request){
        try{
            if( can("delete_subscribers") ){

                DB::statement("DELETE FROM subscribers");

                return back()->with('success', "All item deleted");
            }
            else{
                return unauthorized();
            }
        }
        catch( Exception $e ){
            return $e->getMessage();
        }
    }
    //delete_all function end
}
