<?php

namespace App\Http\Controllers\Backend\CustomerModule\Message;

use App\Http\Controllers\Controller;
use App\Models\SettingsModule\ContactForm;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class MessageController extends Controller
{
    //index function start
    public function index(Request $request){
        try{
            if( can("all_message") ){
                $contact_forms = ContactForm::orderBy("id","desc")->select("id","name","email","phone","subject")->paginate(10);
                return view("backend.modules.customer_module.message.index", compact('contact_forms'));
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


    //view_modal function start
    public function view_modal($id){
        try{
            if( can("all_message") ){

                $contact_form = ContactForm::where("id",decrypt($id))->first();

                return view("backend.modules.customer_module.message.modals.view", compact('contact_form'));

            }
            else{
                return unauthorized();
            }
        }
        catch( Exception $e ){
            return $e->getMessage();
        }
    }
    //view_modal function end


    //delete function start
    public function delete(Request $request){
        try{
            if( can("delete_message") ){

                if( $request->contact_form_ids ){
                    $contact_form = ContactForm::whereIn("id",$request->contact_form_ids)->delete();
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
            if( can("delete_message") ){

                DB::statement("DELETE FROM contact_forms");

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
