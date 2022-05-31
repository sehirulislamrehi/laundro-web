<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\LocationModule\Zipcode;
use App\Models\LocationModule\Location;
use Exception;
use Illuminate\Http\Request;

class LocationController extends Controller
{
    //postal_code_area function start
    public function postal_code_area(Request $request){
        try{
            $zipcode = Zipcode::where("code",$request->code)->where("is_active", true)->select("id")->first();

            if( $zipcode ){
                $locations = Location::where("type","area")->where("zipcode_id", $zipcode->id)->where("is_active", true)->select("id","name")->get();

                return response()->json([
                    'status' => 'success',
                    'data' => $locations
                ],200);
            }
            else{
                return response()->json([
                    'status' => 'warning',
                    'data' => 'We are not giving our services in that area.'
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
    //postal_code_area function end
}
