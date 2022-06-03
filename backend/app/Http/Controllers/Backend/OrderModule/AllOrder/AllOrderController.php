<?php

namespace App\Http\Controllers\Backend\OrderModule\AllOrder;

use App\Http\Controllers\Controller;
use App\Http\Resources\OrderModule\OrderResource;
use App\Models\OrderModule\Order;
use App\Models\OrderModule\OrderServices;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AllOrderController extends Controller
{
    //index function start
    public function index(Request $request){
        try{
            if( can("all_order") ){

                $search = $request->search;
                $query = Order::orderBy("id","desc")->select("id","order_no","timing","order_status","payment_status","total");
                $order_status = '';
                $payment_status = '';
                $payment_method = '';

                if( $search ){
                    $query->where("order_no","LIKE","%$search%");
                }

                if( $request->order_status ){
                    $order_status = $request->order_status;
                    if( $request->order_status != "All" ){
                        $query->where("order_status",$request->order_status);
                    }
                }
                
                if( $request->payment_status ){
                    $payment_status = $request->payment_status;
                    if( $request->payment_status != "All" ){
                        $query->where("payment_status",$request->payment_status);
                    }
                }

                if( $request->payment_method ){
                    $payment_method = $request->payment_method;
                    if( $request->payment_method != "All" ){
                        $query->where("payment_method",$request->payment_method);
                    }
                }

                $orders = $query->paginate(10);

                return view("backend.modules.order_module.all_order.index", compact("orders",'search','order_status','payment_status','payment_method'));
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


    //view function start
    public function view($id){
        try{
            if( can("view_order_details") ){
                $order = Order::where("id", decrypt($id))->first();
                
                if( $order ){
                    $order_services = OrderServices::where("order_id", $order->id)->select("service_id","price","instruction")->with("service")->get();

                    return view("backend.modules.order_module.all_order.modals.view", compact("order","order_services"));

                }
                else{
                    return "No data found";
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
    //view function end


    //edit_modal function start
    public function edit_modal($id){
        try{
            if( can("edit_order") ){
                $order = Order::where("id", decrypt($id))->first();
                
                if( $order ){
                    return view("backend.modules.order_module.all_order.modals.edit", compact("order"));

                }
                else{
                    return "No data found";
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
            if( can("edit_order") ){

                $valdiator = Validator::make($request->all(),[
                    "order_status" => "required",
                    "payment_status" => "required",
                    "payment_method" => "required",
                ]);

                if( $valdiator->fails() ){
                    return response()->json(['errors' => $valdiator->errors()],422);
                }
                else{
                    $order = Order::where("id", decrypt($id))->first();
                
                    if( $order ){
                        $order->order_status = $request->order_status;
                        $order->payment_status = $request->payment_status;
                        $order->payment_method = $request->payment_method;

                        if( $order->save() ){
                            return response()->json(['location_reload' => 'Order updated'],200);
                        }
    
                    }
                    else{
                        return response()->json(['warning' => 'No order found'],200);
                    }
                }
                

            }
            else{
                return response()->json(['warning' => unauthorized()],200);
            }
        }
        catch( Exception $e ){
            return response()->json(['warning' => $e->getMessage()],200);
        }
    } 
    //edit function end
}
