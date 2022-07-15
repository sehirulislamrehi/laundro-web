<?php

namespace App\Http\Controllers\Backend\SettingsModule;

use App\Http\Controllers\Controller;
use App\Models\SettingsModule\Banner;
use Exception;
use Illuminate\Http\Request;
use Yajra\DataTables\Facades\DataTables;

class BannerController extends Controller
{
    
    //index function start
    public function index(){
        try{
            if( can("banners") ){
                return view("backend.modules.setting_module.banners.index");
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


    //data function start
    public function data(){
        try{
            if( can("banners") ){

                $banners = Banner::orderBy('position', 'desc')
                        ->select("id","position","image","title")
                        ->get(); 

                return DataTables::of($banners)
                ->rawColumns(['action', 'image'])
                ->editColumn('image', function(Banner $banner){
                    $url = asset('images/banners/'. $banner->image);

                    return "<img src='.$url.'>";
                })
                ->addColumn('action', function (Banner $banner) {
                    return '
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdown'.$banner->id.'" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Action
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdown'.$banner->id.'">

                            '.( can("edit_banners") ? '
                            <a class="dropdown-item" href="#" data-content="'.route('emirate.edit',$banner->id).'" data-target="#myModal" class="btn btn-outline-dark" data-toggle="modal">
                                <i class="fas fa-edit"></i>
                                Edit
                            </a>
                            ': '') .'

                            '.( can("delete_banners") ? '
                            <a class="dropdown-item" href="#" data-content="'.route('emirate.view',encrypt($banner->id)).'" data-target="#myModal" class="btn btn-outline-dark" data-toggle="modal">
                                <i class="fas fa-trash"></i>
                                Delete
                            </a>
                            ': '') .'

                            '.( can("banners") ? '
                            <a class="dropdown-item" href="#" data-content="'.route('emirate.view',encrypt($banner->id)).'" data-target="#myModal" class="btn btn-outline-dark" data-toggle="modal">
                                <i class="fas fa-eye"></i>
                                View
                            </a>
                            ': '') .'

                        </div>
                    </div>
                    ';
                })
                ->addIndexColumn()
                ->make(true);

            }
            else{
                return response()->json(['warning' => unauthorized()], 200);
            }
        }
        catch( Exception $e ){
            return response()->json(['error' => $e->getMessage()], 200);
        }
    }
    //data function end


    //add_modal function start
    public function add_modal(){
        try{
            if( can("add_banners") ){
                return view("backend.modules.setting_module.banners.modals.add");
            }
            else{
                return unauthorized();
            }
        }
        catch( Exception $e ){
            return $e->getMessage();
        }
    }
    //add_modal function end

}
