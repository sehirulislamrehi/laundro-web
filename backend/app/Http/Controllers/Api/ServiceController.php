<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Exception;
use Illuminate\Http\Request;
use App\Models\ServiceModule\Service;

class ServiceController extends Controller
{
    //get_all_service function start
    public function get_all_service(){
        try{
            $services = Service::where("is_active", true)->select("slug","name","icon","short_description")->orderBy("id","desc")->get();

            return response()->json([
                'status' => 'success',
                'data' => $services
            ],200);
        }
        catch( Exception $e ){
            return response()->json([
                'status' => 'error',
                'data' => $e->getMessage()
            ],200);
        }
    }
    //get_all_service function end
}
