<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    //date_and_time function start
    public function date_and_time(){
        try{

            $select_time = [];

            array_push($select_time,
                [
                    "time" => "09:00 - 11:00"
                ],
                [
                    "time" => "11:00 - 13:00"
                ],   
                [
                    "time" => "13:00 - 15:00"
                ],
                [
                    "time" => "15:00 - 17:00"
                ],
                [
                    "time" => "17:00 - 19:00"
                ],
                [
                    "time" => "19:00 - 21:00"
                ],
            );

            //For collection time
            $select_day_for_collection = [];
            $select_day_for_delivery = [];

            for( $i = 0 ; $i < 10 ; $i++ ){
                $date = Carbon::now()->addDay($i)->format("l, M j");
                array_push($select_day_for_collection,[
                    "day" => $date
                ]);

                if( $i != 0 ){
                    array_push($select_day_for_delivery,[
                        "day" => $date
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
}
