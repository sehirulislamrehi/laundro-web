<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\LocationModule\Zipcode;
use App\Models\LocationModule\Location;

class DashboardController extends Controller
{
    public function index()
    {
        if( auth('super_admin')->check() || auth('web')->check() ){

            $zipcode = Zipcode::select("id")->count();
            $location = Location::select("type")->get();

            return view('backend.dashboard', compact(
                'zipcode', 'location'
            ));
        }
        else{
            return view("errors.404");
        }
    }


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


    //city_zone function start
    public function city_zone(){
        $data = [];
        $cities = Location::select("id","name")->where("type",null)->get();

        foreach( $cities as $city ){
            $zone = Location::where("location_id",$city->id)->select("id")->count();
            array_push($data,
                [
                    "city" => $city->name,
                    "zone" => $zone ,
                ]
            );
        }

        return response()->json(['data' => $data], 200);
    } 
    //city_zone function end


    //zone_area function start
    public function zone_area(){
        $data = [];
        $zones = Location::select("id","name")->where("type","zone")->get();

        foreach( $zones as $zone ){
            $area = Location::where("location_id",$zone->id)->select("id")->count();
            array_push($data,
                [
                    "zone" => $zone->name,
                    "area" => $area ,
                ]
            );
        }

        return response()->json(['data' => $data], 200);
    } 
    //zone_area function end

}