<?php

namespace App\Http\Controllers\Backend\ServiceModule\Service;

use App\Http\Controllers\Controller;
use App\Models\ServiceModule\Duration;
use App\Models\ServiceModule\Service;
use App\Models\ServiceModule\ServiceDuration;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;
use Yajra\DataTables\Facades\DataTables;

class ServiceController extends Controller
{
    //index function start
    public function index(){
        try{
            if( can("services") ){
                return view("backend.modules.service_module.service.index");
            }
            else{
                return view("errors.403");
            }
        }
        catch( Exception $e ){
            return back()->with('error', $e->getMessage());
        }
    }

    //sub_services function start
    public function sub_services($id){
        try{
            if( can("view_services") ){
                $service = Service::where("id", decrypt($id))->select("id","name")->first();

                return view("backend.modules.service_module.service.sub_service",compact('service'));
            }
            else{
                return view("errors.403");
            }
        }
        catch( Exception $e ){
            return back()->with('error', $e->getMessage());
        }
    }
    //sub_services function end


    //service add modal start
    public function add_modal(){
        if( can('add_services') ){
            $services = Service::orderBy('name', 'asc')->where('is_active', true)->where('service_id', null)->get();
            return view("backend.modules.service_module.service.modals.add", compact('services'));
        }
        else{
            return unauthorized();
        }
    }


    //data start
    public function data(){
        if( can('services') ){
            $services = Service::orderBy('id', 'desc')
                        ->where("service_id",null)
                        ->select("id","name","icon","is_active","service_id","price")
                        ->get(); 
            return DataTables::of($services)
            ->rawColumns(["icon","is_active",'action','price'])
            ->editColumn('icon', function(Service $service){

                if( $service->icon == null ){
                    $src = asset("images/service/default.png");
                }
                else{
                    $src = asset("images/service/".$service->icon);
                }
                
                return "
                    <img src='$src' width='50px' height='50px'>
                ";

                return $service->name;
            })
            ->editColumn('is_active', function (Service $service) {
                if ($service->is_active == true) {
                    return '<p class="badge badge-success">Active</p>';
                } else {
                    return '<p class="badge badge-danger">Inactive</p>';
                }
            })
            ->editColumn('price', function (Service $service) {
                return $service->price ?? '-';
            })
            ->addColumn('action', function (Service $service) {
                return '
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdown'.$service->id.'" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Action
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdown'.$service->id.'">

                        '.( can("edit_services") ? '
                        <a class="dropdown-item" href="#" data-content="'.route('service.edit.modal',$service->id).'" data-target="#myModal" class="btn btn-outline-dark" data-toggle="modal">
                            <i class="fas fa-edit"></i>
                            Edit
                        </a>
                        ': '') .'

                        '.( can("edit_services") ? '
                        <a class="dropdown-item" href="#" data-content="'.route('service.set.duration',$service->id).'" data-target="#myModal" class="btn btn-outline-dark" data-toggle="modal">
                            <i class="fas fa-edit"></i>
                            Set Duration
                        </a>
                        ': '' ) .'

                        '.( can("view_services") ? '
                        <a class="dropdown-item" href="#" data-content="'.route('service.view.modal',encrypt($service->id)).'" data-target="#myModal" class="btn btn-outline-dark" data-toggle="modal">
                            <i class="fas fa-eye"></i>
                            View
                        </a>
                        ': '' ) .'

                        '.( can("view_services") ? '
                        <a class="dropdown-item" href="'.route('sub.service.all',encrypt($service->id)).'" class="btn btn-outline-dark">
                            <i class="fas fa-eye"></i>
                            Sub Services
                        </a>
                        ': '' ) .'

                    </div>
                </div>
                ';
            })
            ->addIndexColumn()
            ->make(true);
        }else{
            return unauthorized();
        }
    }
    //data end


    //sub_service_data start
    public function sub_service_data($id){
        if( can('services') ){
            $services = Service::orderBy('id', 'desc')
                        ->where("service_id",decrypt($id))
                        ->select("id","name","icon","price","is_active","service_id")
                        ->get(); 
            return DataTables::of($services)
            ->rawColumns(["icon","price","is_active", 'parent','action'])
            ->editColumn('icon', function(Service $service){

                if( $service->icon == null ){
                    $src = asset("images/service/default.png");
                }
                else{
                    $src = asset("images/service/".$service->icon);
                }
                
                return "
                    <img src='$src' width='50px' height='50px'>
                ";

                return $service->name;
            })
            ->editColumn('price', function(Service $service){

                return $service->price ?? 'N/A';
            })
            ->editColumn('is_active', function (Service $service) {
                if ($service->is_active == true) {
                    return '<p class="badge badge-success">Active</p>';
                } else {
                    return '<p class="badge badge-danger">Inactive</p>';
                }
            })
            ->editColumn('parent', function(Service $service){
                if( $service->parent ){
                    $name = $service->parent->name;
                    return "<span>$name</span>";
                }
                else{
                    return "<span class='badge badge-info'>Parent</span>";
                }
            })
            ->addColumn('action', function (Service $service) {
                return '
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdown'.$service->id.'" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Action
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdown'.$service->id.'">

                        '.( can("edit_services") ? '
                        <a class="dropdown-item" href="#" data-content="'.route('service.edit.modal',$service->id).'" data-target="#myModal" class="btn btn-outline-dark" data-toggle="modal">
                            <i class="fas fa-edit"></i>
                            Edit
                        </a>
                        ': '') .'

                        '.( can("edit_services") ? '
                        <a class="dropdown-item" href="#" data-content="'.route('service.set.duration',$service->id).'" data-target="#myModal" class="btn btn-outline-dark" data-toggle="modal">
                            <i class="fas fa-edit"></i>
                            Set Duration
                        </a>
                        ': '' ) .'

                        '.( can("view_services") ? '
                        <a class="dropdown-item" href="#" data-content="'.route('service.view.modal',encrypt($service->id)).'" data-target="#myModal" class="btn btn-outline-dark" data-toggle="modal">
                            <i class="fas fa-eye"></i>
                            View
                        </a>
                        ': '' ) .'

                    </div>
                </div>
                ';
            })
            ->addIndexColumn()
            ->make(true);
        }else{
            return unauthorized();
        }
    }
    //sub_service_data end


    //add start
    public function add(Request $request){
        if( can('add_services') ){
            
            if( $request->service_id == 'null' ){
                $validator = Validator::make($request->all(),[
                    'name'           => 'required|unique:services,name',
                    'icon'           => 'required|mimes:jpeg,jpg,png,bmp',
                    'is_active'      => 'required',
                ]);
            }
            else{

                if( $request->price_check == true ){
                    $validator = Validator::make($request->all(),[
                       'name'           => 'required|unique:services,name',
                        'icon'           => 'required|mimes:jpeg,jpg,png,bmp',
                        'is_active'      => 'required',
                        'service_id' => 'required|integer|exists:services,id',
                        'price' => 'required|integer',
                    ]);
                }
                else{
                    $validator = Validator::make($request->all(),[
                       'name'           => 'required|unique:services,name',
                        'icon'           => 'required|mimes:jpeg,jpg,png,bmp',
                        'is_active'      => 'required',
                        'service_id' => 'required|integer|exists:services,id',
                    ]);
                }
                
            }
            

            if( $validator->fails() ){
               return response()->json(['errors' => $validator->errors()] ,422);
            }else{
                try{
                    $service             = new Service();
					$service->name           = $request->name;
					$service->slug           = Str::slug($request->name);

                    if( $request->price_check == true ){
                        $service->price = $request->price;
                    }
                    else{
                        $service->price = null;
                    }
					
					$service->service_id     = ($request->service_id == 'null') ? null : $request->service_id;
					$service->is_active      = $request->is_active;

                    $image = $request->file('icon');
                    $img = $service->name . time().Str::random(12).'.'.$image->getClientOriginalExtension();
                    $location = public_path('images/service/'.$img);
                    Image::make($image)->save($location);
					$service->icon           = $img;

					$service->short_description = $request->short_description;
					$service->service_overview = $request->service_overview;

                    $service->save();

                    
                    return response()->json(['success' => 'New Service '.$service->name.' Created Successfully'], 200);

                }catch( Exception $e ){
                    return response()->json(['error' => $e->getMessage()],200);
                }
            }
        }else{
            return response()->json(['warning' => unauthorized()],200);
        }
    }


    //edit modal start
    public function edit_modal($id){
        if( can("edit_services") ){
            $service = Service::where("id",$id)->first();
            $services = Service::orderBy('name', 'asc')->where('is_active', true)->where('service_id', null)->where("id","!=",$id)->get();

            return view("backend.modules.service_module.service.modals.edit", compact("service","services"));
        }
        else{
            return unauthorized();
        }
    }


    //set_duration modal start
    public function set_duration($id){
        if( can("edit_services") ){
            $service = Service::where("id",$id)->first();
            $durations = Duration::orderBy('duration', 'asc')->get();
            return view("backend.modules.service_module.service.modals.set_duration", compact("service","durations"));
        }
        else{
            return unauthorized();
        }
    }

    //update modal start
    public function update(Request $request, $id){
        if( can('edit_services') ){

            if( $request->service_id == 'null' ){
                $validator = Validator::make($request->all(),[
                   'name'           => 'required|unique:services,name,'. $id,
                    'is_active'      => 'required',
                ]);
            }
            else{

                if( $request->price_check == true ){
                    $validator = Validator::make($request->all(),[
                       'name'           => 'required|unique:services,name,'. $id,
                        'is_active'      => 'required',
                        'service_id' => 'required|integer|exists:services,id',
                        'price' => 'required|integer',
                    ]);
                }
                else{
                    $validator = Validator::make($request->all(),[
                       'name'           => 'required|unique:services,name,'. $id,
                        'is_active'      => 'required',
                        'service_id' => 'required|integer|exists:services,id',
                    ]);
                }
                
            }

           if( $validator->fails() ){
               return response()->json(['errors' => $validator->errors()] ,422);
           }else{
                try{
                    $service = Service::find($id);
					$service->name           = $request->name;
					$service->slug           = Str::slug($request->name);

					if( $request->price_check == true ){
                        $service->price = $request->price;
                    }
                    else{
                        $service->price = null;
                    }

					$service->service_id     = ($request->service_id == 'null') ? null : $request->service_id;
					$service->is_active      = $request->is_active;

					if( $request->icon ){
                        if( File::exists('images/service/'. $service->icon) ){
                            File::delete('images/service/'. $service->icon);
                        }

	                    $image = $request->file('icon');
	                    $img = $service->name . time().Str::random(12).'.'.$image->getClientOriginalExtension();
	                    $location = public_path('images/service/'.$img);
	                    Image::make($image)->save($location);
						$service->icon           = $img;
					}

                    $service->short_description = $request->short_description;
					$service->service_overview = $request->service_overview;

                    $service->save();
                    return response()->json(['success' => $service->name . "'s Updated Successfully"], 200);

                }catch( Exception $e ){
                    return response()->json(['error' => $e->getMessage()],200);
                }
           }
        }else{
            return response()->json(['warning' => unauthorized()],200);
        }
    }

    // store_duration
    public function store_duration(Request $request, $id){
        if( can('edit_services') ){

            $service = Service::where("id",$id)->first();

            if( $service ){

                $validator = Validator::make($request->all(),[
                    'duration_ids.*' => 'required',
                    'instructions.*' => 'required',
                    'prices.*'       => 'required|integer|min:1',
                ]);

                if( count(array_diff_assoc($request->instructions, array_unique($request->instructions))) ){
                   return response()->json(['warning' => 'Duplicate instruction found'] ,200);
                }
                
    
                if( $validator->fails() ){
                   return response()->json(['errors' => $validator->errors()] ,422);
                }
                else{
                    try{
    
                        if( $request->duration_ids ){

                            // delete old records if any exists in service duration table
                            DB::statement("DELETE FROM service_durations WHERE service_id = $id");
    
                            // store all new data in service durations table
                            foreach ($request->duration_ids as $key => $duration_id) {  
                                $service_duration = new ServiceDuration;
    
                                $service_duration->service_id = $id;
                                $service_duration->duration_id = $duration_id;
                                $service_duration->instructions = $request->instructions[$key];

                                $service_duration->price = $request->prices[$key];
                                $service_duration->save();
                            }
    
                            return response()->json(['success' => "Service's Duration is set Successfully"], 200);
                        }
                        else{
                            return response()->json(['warning' => 'Please choose service duration'],200);
                        }
                        
    
                    }catch( Exception $e ){
                        return response()->json(['error' => $e->getMessage()],200);
                    }
                }
            }
            else{
                return response()->json(['warning' => 'No service found'],200);
            }

            
        }else{
            return response()->json(['warning' => unauthorized()],200);
        }
    }


    //view_modal function start
    public function view_modal($id){
        try{
            if( can("view_services") ){
                $service = Service::where("id",decrypt($id))->with("service_durations")->first();

                if( $service ){
                    return view("backend.modules.service_module.service.modals.view", compact("service"));
                }
                else{
                    return "No service found";
                }
            }
            else{
                return \unauthorized();
            }
        }
        catch( Exception $e ){
            return  $e->getMessage();
        }
    } 
    //view_modal function end
}
