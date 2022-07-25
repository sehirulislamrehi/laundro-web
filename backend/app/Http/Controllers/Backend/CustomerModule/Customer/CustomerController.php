<?php

namespace App\Http\Controllers\Backend\CustomerModule\Customer;

use App\Http\Controllers\Controller;
use App\Models\CustomerModule\Customer;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CustomerController extends Controller
{
    //index function start
    public function index(Request $request){
        try{
            if( can("all_customer") ){
                $search = $request->search;
                $query = Customer::orderBy("id","desc")->select("id","name","phone","email","is_active","is_verified");

                if( $request->search ){
                    $query->where("name","LIKE","%$search%")
                    ->orWhere("phone","LIKE","%$search%")
                    ->orWhere("email","LIKE","%$search%");
                }

                $customers = $query->paginate(10);

                return view("backend.modules.customer_module.customer.index", compact('customers', 'search'));
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


    //edit_modal function start
    public function edit_modal($id){
        try{
            if( can("edit_customer") ){
                
                $customer = Customer::where("id",decrypt($id))->first();

                if( $customer ){
                    return view("backend.modules.customer_module.customer.modals.edit", compact('customer'));
                }
                else{
                    return "No customer found";
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
    public function edit($id, Request $request){
        try{
            if( can("edit_customer") ){
                
                $customer = Customer::where("id",decrypt($id))->first();

                if( $customer ){
                    $valdiator = Validator::make($request->all(),[
                        "is_active" => "required|in:0,1",
                        "is_verified" => "required|in:0,1",
                    ]);

                    if( $valdiator->fails() ){
                        return response()->json(['errors' => $valdiator->errors()],422);
                    }
                    else{
                        $customer->is_active = $request->is_active;
                        $customer->is_verified = $request->is_verified;

                        if( $customer->save() ){
                            return response()->json(['status' => 'success', 'location_reload' => "Customer update"],200);
                        }
                    }
                }
                else{
                    return response()->json(['warning' => "No customer found"],200);
                }

            }
            else{
                return response()->json(['warning' => unauthorized()],200);
            }
        }
        catch( Exception $e ){
            return response()->json(['error' => $e->getMessage()],200);
        }
    }
    //edit function end


    //view_modal function start
    public function view_modal($id){
        try{
            if( can("all_customer") ){
                
                $customer = Customer::where("id",decrypt($id))->first();

                if( $customer ){
                    return view("backend.modules.customer_module.customer.modals.view", compact('customer'));
                }
                else{
                    return "No customer found";
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
    //view_modal function end
}
