<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\LocationModule\Zipcode;
use App\Models\LocationModule\Location;
use App\Models\OrderModule\Order;
use Carbon\Carbon;
use Exception;

class DashboardController extends Controller
{
    public function index()
    {
        if( auth('super_admin')->check() || auth('web')->check() ){

            $orders = Order::select("order_status","total","order_date","delivery_date")->get();
            
            return view('backend.dashboard', compact(
                'orders'
            ));
        }
        else{
            return view("errors.404");
        }
    }


    //order_progress function start
    public function order_progress(){
        try{
            $month = Carbon::now()->month;
            $this_month = Carbon::now()->month - 1;
            $year = Carbon::now()->year;
            $data = [];

            for( $i = 0 ; $i < 6 ; $i++ ){

                $orders = Order::select("order_status","total")->where("year",$year)->where("month",$month)->get();

                array_push($data,
                    [
                        "total_order" => $orders->count(),
                        "total_income" => $orders->where("order_status","Delivered")->sum("total"),
                        "possible_income" => $orders->where("order_status","!=","Pending")->where("order_status","!=","Cancelled")->sum("total"),
                        "time" => Carbon::create()->day(1)->month($month)->format('M') .' '. $year,
                    ]
                );
                
                $month--;

                if( $i == $this_month && $month < 6 ){
                    $year = $year - 1;
                }
                
                if( $month == 0 ){
                    $month = 12;
                }
            }

            return response()->json(['data' => $data], 200);

        }
        catch( Exception $e ){
            return response()->json(['error' => $e->getMessage()], 200);
        }
    }
    //order_progress function end


    //zipcode_area function start
    public function zipcode_area(){
        $data = [];
        $zipcodes = Zipcode::select("id","code")->get();

        foreach( $zipcodes as $zipcode ){
            $area = Location::where("zipcode_id",$zipcode->id)->select("id")->count();
            array_push($data,
                [
                    "code" => "Zipcode : ". $zipcode->code,
                    "area" => $area ,
                ]
            );
        }

        return response()->json(['data' => $data], 200);
    } 
    //zipcode_area function end




}