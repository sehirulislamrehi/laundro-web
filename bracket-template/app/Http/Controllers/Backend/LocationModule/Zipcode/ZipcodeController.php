<?php

namespace App\Http\Controllers\Backend\LocationModule\Zipcode;

use App\Http\Controllers\Controller;
use App\Models\LocationModule\Zipcode;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Yajra\DataTables\Facades\DataTables;

class ZipcodeController extends Controller
{
    
    //index function start
    public function index(Request $request){
        try{
            if( can("zip_code") ){
                return view("backend.modules.location_module.zipcode.index");
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


    //data function  start
    public function data(){
        if( can('zip_code') ){

            $zipcode = DB::select("SELECT id,code,is_active FROM zipcodes ORDER BY id DESC");
                        
            return DataTables::of($zipcode)
            ->rawColumns(['action', 'is_active'])
            ->editColumn('is_active', function ($zipcode) {
                if ($zipcode->is_active == true) {
                    return '<p class="badge badge-success">Active</p>';
                } else {
                    return '<p class="badge badge-danger">Inactive</p>';
                }
            })
            ->addColumn('action', function ($zipcode) {
                return '
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdown'.$zipcode->id.'" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Action
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdown'.$zipcode->id.'">

                        '.( can("edit_zip_code") ? '
                        <a class="dropdown-item" href="#" data-content="'.route('zip_code.edit',encrypt($zipcode->id)).'" data-target="#myModal" class="btn btn-outline-dark" data-toggle="modal">
                            <i class="fas fa-edit"></i>
                            Edit
                        </a>
                        ': '') .'

                        '.( can("view_zip_code") ? '
                        <a class="dropdown-item" href="#" data-content="'.route('zip_code.view',encrypt($zipcode->id)).'" data-target="#myModal" class="btn btn-outline-dark" data-toggle="modal">
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
    //data function start


    //add_modal function start
    public function add_modal(){
        if( can('add_zip_code') ){
            return view("backend.modules.location_module.zipcode.modals.add");
        }
        else{
            return unauthorized();
        }
    }
    //add_modal function end


    //add function start
    public function add(Request $request){
        if( can('add_zip_code') ){
            $validator = Validator::make($request->all(),[
                'code'      => 'required|integer|unique:zipcodes,code',
            ]);
            

           if( $validator->fails() ){
               return response()->json(['errors' => $validator->errors()] ,422);
           }else{
                try{
                    $zipcode = new Zipcode();
                    $zipcode->code = $request->code;
                    $zipcode->is_active = true;
                    
                    if( $zipcode->save() ){
                        return response()->json(['success' => 'New zipcode : '.$zipcode->code.' created successfully'], 200);
                    }

                }
                catch( Exception $e ){
                    return response()->json(['error' => $e->getMessage()],200);
                }
           }
        }else{
            return response()->json(['warning' => unauthorized()],200);
        }
    }
    //add function end


     //edit function start
     public function edit($id){
        if( can('edit_zip_code') ){
            $id = decrypt($id);
            $zipcode = DB::select("SELECT id,code,is_active FROM zipcodes WHERE id = $id");

            if( isset($zipcode[0]) ){
                $zipcode = $zipcode[0];
                return view("backend.modules.location_module.zipcode.modals.edit", compact('zipcode'));
            }
            else{
                return 'No zipcode found';
            }

        }
        else{
            return unauthorized();
        }
    }
    //edit function end


    //update function start
    public function update(Request $request, $id){
        if( can('edit_zip_code') ){
            $id = decrypt($id);
            $validator = Validator::make($request->all(),[
                'code' => 'required|integer|unique:zipcodes,code,'. $id,
                'is_active' => 'required'
            ]);
            

           if( $validator->fails() ){
               return response()->json(['errors' => $validator->errors()] ,422);
           }
           else{
                try{
                    $zipcode = Zipcode::find($id);
                    $zipcode->code = $request->code;
                    $zipcode->is_active = $request->is_active;
                    
                    if( $zipcode->save() ){
                        return response()->json(['success' => 'Zipcode : '.$zipcode->code.' updated successfully'], 200);
                    }

                }
                catch( Exception $e ){
                    return response()->json(['error' => $e->getMessage()],200);
                }
           }
        }
        else{
            return response()->json(['warning' => unauthorized()],200);
        }
    }
    //update function end


    //view function start
    public function view($id){
        if( can('view_zip_code') ){
            $id = decrypt($id);
            $zipcode = DB::select("SELECT * FROM zipcodes WHERE id = $id");

            if( isset($zipcode[0]) ){
                $zipcode = $zipcode[0];
                return view("backend.modules.location_module.zipcode.modals.view", compact('zipcode'));
            }
            else{
                return 'No zipcode found';
            }

        }
        else{
            return unauthorized();
        }
    }
    //view function end
}
