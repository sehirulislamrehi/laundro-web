<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\OrderModule\OrderResource;
use App\Models\CustomerModule\Customer;
use App\Models\LocationModule\Location;
use App\Models\OrderModule\Order;
use App\Models\OrderModule\OrderServices;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class OrderController extends Controller
{
    //date_and_time function start
    public function date_and_time(){
        try{

            $select_time = [];

            array_push($select_time,
                [
                    "time" => "09:00-11:00"
                ],
                [
                    "time" => "11:00-13:00"
                ],   
                [
                    "time" => "13:00-15:00"
                ],
                [
                    "time" => "15:00-17:00"
                ],
                [
                    "time" => "17:00-19:00"
                ],
                [
                    "time" => "19:00-21:00"
                ],
            );

            //For collection time
            $select_day_for_collection = [];
            $select_day_for_delivery = [];

            for( $i = 0 ; $i < 10 ; $i++ ){
                $date = Carbon::now()->addDay($i)->format("l, M j");
                array_push($select_day_for_collection,[
                    "day" => $date,
                    "date" => Carbon::now()->addDay($i)->format("j")
                ]);

                if( $i != 0 ){
                    array_push($select_day_for_delivery,[
                        "day" => $date,
                        "date" => Carbon::now()->addDay($i)->format("j")
                    ]);
                }
            }

            $driver_instructions_for_collection = [];
            $driver_instructions_for_delivery = [];

            array_push($driver_instructions_for_collection,
                [
                    "instructions" => "Driver collects from you"
                ],
                [
                    "instructions" => "Driver Collects From outside"
                ],   
                [
                    "instructions" => "Driver Collects From reception/porter"
                ],
            );

            array_push($driver_instructions_for_delivery,
                [
                    "instructions" => "Driver drops, rings, waits"
                ],
                [
                    "instructions" => "Driver drops, rings, goes"
                ],   
                [
                    "instructions" => "Driver leaves bag at reception/porter"
                ],
            );


            return response()->json([
                'status' => 'success',
                'data' => [
                    'select_time' => $select_time,
                    'select_day_for_collection' => $select_day_for_collection,
                    'select_day_for_delivery' => $select_day_for_delivery,
                    'driver_instructions_for_collection' => $driver_instructions_for_collection,
                    'driver_instructions_for_delivery' => $driver_instructions_for_delivery,
                ]
            ],200);

        }
        catch( Exception $e ){
            return response()->json([
                'status' => 'error',
                'data' => $e->getMessage()
            ],200);
        }
    } 
    //date_and_time function end


    //place_order function start
    public function place_order(Request $request){
        try{
            $customer = Customer::where("remember_token", $request->token)->first();

            if( $customer ){
                $step_one_data = json_decode($request->step_one_data);
                $step_two_data = json_decode($request->step_two_data);
                $services = json_decode($request->services);
                $contact_data = json_decode($request->contact_data);
                
                $location = Location::where("id", $step_one_data->address_id)->first();


                $order = new Order();

                $order->order_no = "L-" . rand(00000000,99999999);
                $order->customer_id = $customer->id;
                $order->name = $contact_data->name;
                $order->email = $contact_data->email;
                $order->phone = $contact_data->phone;
                $order->postal_code = $step_one_data->postal_code;
                $order->location = $location->name;
                $order->address_details = $step_one_data->address_in_details;
                $order->address_type = $step_one_data->address_type;
                $order->timing = json_encode($step_two_data);
                $order->total = 0;
                $order->order_status = "Pending";
                $order->payment_status = "Pending";
                $order->payment_method = "Cash";

                
                if( $order->save() ){

                    $total = 0;
                    foreach( $services as $service ){
                        $order_service = new OrderServices();

                        $order_service->order_id = $order->id;
                        $order_service->service_id = $service->id;
                        $order_service->service_duration_id = $service->instructions_id;
                        $order_service->price = $service->price;
                        $order_service->instruction = $service->instruction;
                        $order_service->save();

                        $total += $service->price;
                    }

                    $order->total = $total;

                    if( $order->save() ){
                        $email = mail_from();
                        Mail::send('emails.order_place', ['order' => $order], function ($message) use ($order,$email) {
                            $message->from($email);
                            $message->to($order->email);
                            $message->subject("New Order Created. ( ". $order->order_no ." )");
                        });

                        return response()->json([
                            'status' => 'success',
                            'data' => 'New Order Created'
                        ],200);
                    }
                   

                }
                

            }
            else{
                return response()->json([
                    'status' => 'error',
                    'data' => 'No Customer Found'
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
    //place_order function end


    //get_order function start
    public function get_order(Request $request,$token){
        try{
            $customer = Customer::where("remember_token",$token)->first();

            if( $customer ){
                $order = Order::where("customer_id", $customer->id)->with("order_service")->select("id","order_no","timing","order_status","address_details")->orderBy("id","desc")->get();

                return response()->json([
                    'status' => 'success',
                    'data' => $order
                ],200);
            }
            else{
                return response()->json([
                    'status' => 'warning',
                    'data' => 'No customer found'
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
    //get_order function end


    //order_details function start
    public function order_details(Request $request, $order_no){
        try{
            $customer = Customer::where("remember_token", $request->token)->first();

            if( $customer ){
                $order = Order::where("customer_id", $customer->id)->where("order_no", $order_no)->first();

                if( $order ){
                    return response()->json([
                        'status' => 'success',
                        'data' => new OrderResource($order)
                    ],200);
                }
                else{
                    return response()->json([
                        'status' => 'warning',
                        'data' => 'No order found'
                    ],200);
                }
            }
            else{
                return response()->json([
                    'status' => 'warning',
                    'data' => 'No customer found'
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
    //order_details function end


    //order_data function start
    public function order_data($token){
        try{
            $customer = Customer::where("remember_token",$token)->first();

            if( $customer ){
                $order = Order::where("customer_id", $customer->id)->select("order_status")->get();

                $total = $order->count();
                $pending = $order->where("order_status","Pending")->count();
                $confirmed = $order->where("order_status","Confirmed")->count();
                $assigned = $order->where("order_status","Assigned")->count();
                $on_process = $order->where("order_status","OnProcess")->count();
                $delivered = $order->where("order_status","Delivered")->count();
                $cancelled = $order->where("order_status","Cancelled")->count();

                $data = [];
                array_push($data,[
                    'total' => $total,
                    'pending' => $pending,
                    'confirmed' => $confirmed,
                    'assigned' => $assigned,
                    'on_process' => $on_process,
                    'delivered' => $delivered,
                    'cancelled' => $cancelled
                ]);

                return response()->json([
                    'status' => 'success',
                    'data' => $data[0]
                ],200);

            }
            else{
                return response()->json([
                    'status' => 'warning',
                    'data' => 'No customer found'
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
    //order_data function end
}
