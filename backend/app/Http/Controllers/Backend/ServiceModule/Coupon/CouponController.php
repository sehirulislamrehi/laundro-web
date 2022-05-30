<?php

namespace App\Http\Controllers\Backend\ServiceModule\Coupon;

use App\Http\Controllers\Controller;
use App\Models\ServiceModule\Coupon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Yajra\DataTables\Facades\DataTables;

class CouponController extends Controller
{
    //index function start
    public function index(){
        try{
            if( can("coupon") ){
                return view("backend.modules.service_module.coupon.index");
            }
            else{
                return view("errors.403");
            }
        }
        catch( Exception $e ){
            return back()->with('error',$e->getMessage());
        }
    }
    //index function end


    //data function start
    public function data(){
        try{
            if( can('coupon') ){
                $coupon = Coupon::orderBy('id', 'desc')->get(); 
    
                return DataTables::of($coupon)
                ->rawColumns(['action', 'is_active','type'])
                ->editColumn('is_active', function (Coupon $coupon) {
                    if ($coupon->is_active == true) {
                        return '<p class="badge badge-success">Active</p>';
                    } else {
                        return '<p class="badge badge-danger">Inactive</p>';
                    }
                })
                ->editColumn('type', function (Coupon $coupon) {
                    return ( $coupon->type == 'Cash' ) ? 'Fixed Amount' : 'Percentage';
                })
                ->addColumn('action', function (Coupon $coupon) {
                    return '
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdown'.$coupon->id.'" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Action
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdown'.$coupon->id.'">
    
                            '.( can("edit_coupon") ? '
                            <a class="dropdown-item" href="#" data-content="'.route('coupon.edit.modal',encrypt($coupon->id)).'" data-target="#myModal" class="btn btn-outline-dark" data-toggle="modal">
                                <i class="fas fa-edit"></i>
                                Edit
                            </a>
                            ': '') .'

                            '.( can("view_coupon") ? '
                            <a class="dropdown-item" href="#" data-content="'.route('coupon.view.modal',encrypt($coupon->id)).'" data-target="#myModal" class="btn btn-outline-dark" data-toggle="modal">
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
            }else{
                return unauthorized();
            }
        }
        catch( Exception $e ){
            return response()->json(['error' => $e->getMessage()],200);
        }
    }
    //data function end


    //add_modal function start
    public function add_modal(){
        try{
            if( can("add_coupon") ){
                return view("backend.modules.service_module.coupon.modals.add");
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


    //add function start
    public function add(Request $request){
        try{
            if( can("add_coupon") ){
                $validator = Validator::make($request->all(),[
                    "code" => "required|unique:coupons,code",
                    "expiry_date" => "required",
                    "amount" => "required|integer|min:1",
                    "type" => "required|in:Cash,Percentage",
                ]);

                if( $validator->fails() ){
                    return response()->json(['errors' => $validator->errors()], 422);
                }
                else{
                    $coupon = new Coupon();
                    $coupon->code = $request->code;
                    $coupon->expiry_date = $request->expiry_date;
                    $coupon->type = $request->type;

                    if( $request->type == "Cash" ){
                        $coupon->amount = $request->amount;
                    }
                    else{
                        if( $request->amount > 100 ){
                            return response()->json(['warning' => 'Amount can not be gather than 100 %'], 200);
                        }
                        else{
                            $coupon->amount = $request->amount;
                        }
                    }

                    $coupon->is_active = true;

                    if( $coupon->save() ){
                        return response()->json(['success' => 'Coupon Created'], 200);
                    }
                }

            }
            else{
                return response()->json(['warning' => unauthorized()], 200);
            }
        }
        catch( Exception $e ){
            return response()->json(['error' => $e->getMessage()], 200);

        }
    }
    //add function end


    //edit_modal function start
    public function edit_modal($id){
        try{
            if( can("edit_coupon") ){
                $coupon = Coupon::where("id",decrypt($id))->first();

                if( $coupon ){
                    return view("backend.modules.service_module.coupon.modals.edit",compact("coupon"));
                }
                else{
                    return "No Coupon Found";
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
    public function edit(Request $request,$id){
        try{
            if( can("edit_coupon") ){
                $id = decrypt($id);
                $validator = Validator::make($request->all(),[
                    "code" => "required|unique:coupons,code,". $id,
                    "expiry_date" => "required",
                    "amount" => "required|integer|min:1",
                    "type" => "required|in:Cash,Percentage",
                ]);

                if( $validator->fails() ){
                    return response()->json(['errors' => $validator->errors()], 422);
                }
                else{
                    $coupon = Coupon::find($id);

                    if( $coupon ){
                        $coupon->code = $request->code;
                        $coupon->expiry_date = $request->expiry_date;
                        $coupon->type = $request->type;
    
                        if( $request->type == "Cash" ){
                            $coupon->amount = $request->amount;
                        }
                        else{
                            if( $request->amount > 100 ){
                                return response()->json(['warning' => 'Amount can not be gather than 100 %'], 200);
                            }
                            else{
                                $coupon->amount = $request->amount;
                            }
                        }
    
                        $coupon->is_active = $request->is_active;
    
                        if( $coupon->save() ){
                            return response()->json(['success' => 'Coupon Updated'], 200);
                        }
                    }
                    else{
                        return response()->json(['warning' => 'No coupon found'], 200);
                    }
                }

            }
            else{
                return response()->json(['warning' => unauthorized()], 200);
            }
        }
        catch( Exception $e ){
            return response()->json(['error' => $e->getMessage()], 200);

        }
    }
    //edit function end


    //view_modal function start
    public function view_modal($id){
        try{
            if( can("view_coupon") ){
                $coupon = Coupon::where("id",decrypt($id))->first();

                if( $coupon ){
                    return view("backend.modules.service_module.coupon.modals.view",compact("coupon"));
                }
                else{
                    return "No Duration Found";
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
