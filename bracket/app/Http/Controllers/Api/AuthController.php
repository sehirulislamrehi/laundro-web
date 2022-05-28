<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\CustomerModule\CustomerResource;
use App\Models\CustomerModule\Customer;
use App\Models\SettingsModule\AppInfo;
use App\Models\UserModule\Verify;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Http;


class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'me', 'register', 'logout','verify','get_code','update_profile','change_password','manage_session','resend_code','reset_password']]);
    }



    public function register(Request $request){
        try{
            $validator = Validator::make($request->all(),[
                "name"       => "required",
                "phone"      => "required|unique:customers,phone",
                "password"   => "required|min:6|confirmed",
            ]);

            if( $validator->fails() ){
                return response()->json([
                    'status' => 'error',
                    'data' => $validator->errors()
                ],422); 
            }
            else{

                // $verify = new Verify();

                // $code = rand(000000,999999);
                
                // if( Str::length($code) == 5 ){
                //     $code = rand(000000,999999);
                // }
                
                // $verify->phone = $request->phone;
                // $verify->code = $code;

                // if( $verify->save() ){
                    
                    // get your REST API keys from MXT https://mxt.smsglobal.com/integrations
                    // \SMSGlobal\Credentials::set('4516eec6a32e175c9dfcaf822a8bcc9b', '00830b14fd2e47ef6071ff185c2374c3');
                                    
                    // $sms = new \SMSGlobal\Resource\Sms();

                    // $response = $sms->sendToOne('971'.$request->phone, "Your verification code is : $code","First Call");
                    
                    // if( isset($response['messages'][0]['status']) ){
                        $customer = new Customer();
                        $customer->name = $request->name;
                        $customer->phone = $request->phone;
                        $customer->password = Hash::make($request->password);
                        $customer->month  = Carbon::now()->month;
                        $customer->year  = Carbon::now()->year; 
    
                        $customer->is_active = true;
                        $customer->is_verified = true;
    
                        if( $customer->save() ){
                            $customer = Customer::where('id',$customer->id)->first();
                            return response()->json([
                                'status' => 'success',
                                'message' => 'Registration Successfully Done',
                                'data' => $customer
                            ],200); 
                        }
                    // }
                    // else{
                    //     return response()->json([
                    //         'status' => 'error',
                    //         'message' => 'Failed To Send SMS',
                    //     ],200); 
                    // }

                    
                // }

                
            }

        }
        catch( Exception $e ){
            return response()->json([
                'status' => 'error',
                'data' => $e->getMessage()
            ],200);
        }
    }


    public function resend_code(Request $request){
        try{
            $validator = Validator::make($request->all(),[
                "phone"      => "required|exists:customers,phone",
            ]);

            if( $validator->fails() ){
                return response()->json([
                    'status' => 'error',
                    'data' => $validator->errors()
                ],200); 
            }
            else{
                $verify = new Verify();

                $code = rand(000000,999999);
                $verify->phone = $request->phone;
                $verify->code = $code;

                if( $verify->save() ){
                    // get your REST API keys from MXT https://mxt.smsglobal.com/integrations
                    \SMSGlobal\Credentials::set('4516eec6a32e175c9dfcaf822a8bcc9b', '00830b14fd2e47ef6071ff185c2374c3');
                                    
                    $sms = new \SMSGlobal\Resource\Sms();

                    $response = $sms->sendToOne('971'.$request->phone, "Your verification code is : $code \n First Call Service");
                    
                    if( isset($response['messages'][0]['status']) ){
                        
                        return response()->json([
                            'status' => 'success',
                            'message' => 'A verification code send to your mobile',
                        ],200); 
                        
                    }
                    else{
                        return response()->json([
                            'status' => 'error',
                            'message' => 'Failed To Send SMS',
                        ],200); 
                    }

                    
                }
            }
        }
        catch( Exception $e ){
            return response()->json([
                'status' => 'error',
                'data' => $e->getMessage()
            ],200);
        }
    }
    

    public function verify(Request $request){
        try{
            $validator = Validator::make($request->all(),[
                "code" => "required|integer|min:5",
                "phone" => "required",
            ]);

            if( $validator->fails() ){
                return response()->json([
                    'status' => 'error',
                    'data' => $validator->errors()
                ],200); 
            }
            else{
                $verify = Verify::where("code", $request->code)->where("phone", $request->phone)->select("code","phone","created_at")->first();

                if( $verify ){

                    $now_time = Carbon::now()->toTimeString();
                    $verification_time = date("H:i:s",strtotime($verify->created_at->toTimeString()) + 5*60);


                    if( $now_time > $verification_time ){
                        return response()->json([
                            'status' => 'error',
                            'data' => 'Code is expired. Resend it again'
                        ],200);
                    }
                    else{
                        $customer = Customer::where("phone", $request->phone)->first();

                        if( $customer ){
                            $customer->is_verified = true;

                            $app_info = AppInfo::select("welcome_point","expiry_days")->first();
                            $day = Carbon::now()->addDay($app_info->expiry_days)->toDateString();
                            $customer->point = $app_info ? $app_info->welcome_point : 0;
                            $customer->point_expiry_date = $day; 

                            if( $customer->save() ){
                                $verify->delete();
                                return response()->json([
                                    'status' => 'success',
                                    'message' => 'Verification successfully done',
                                    'data' => new CustomerResource($customer)
                                ],200); 
                            }
                        }
                        else{
                            return response()->json([
                                'status' => 'error',
                                'data' => 'No customer found with this phone number'
                            ],200);
                        }
                    }

                    

                }
                else{
                    return response()->json([
                        'status' => 'error',
                        'data' => 'Code is expired. Please try again'
                    ],200);
                }

            }
        }
        catch( Exception $e ){
            return response()->json([
                'status' => 'error',
                'data' => $e->getMessage()
            ],200);
        }
    }



    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        // validator
        $validator = Validator::make($request->all(),[
            "phone"       => "required|exists:customers,phone",
            "password"   => "required",
        ]);

        if( $validator->fails() ){
            return response()->json([
                'status' => 'error',
                'data' => $validator->errors()
            ],200); 
        }

        $customer = Customer::where("phone",$request->phone)->first();

        if( $customer->is_active == false ){
            return response()->json([
                'status' => 'error',
                'data' => 'Account deactivated'
            ],200); 
        }

        elseif( $customer->is_verified == false ){
            // $verify = new Verify();

            // $code = rand(000000,999999);
            // $verify->phone = $request->phone;
            // $verify->code = $code;

            // if( $verify->save() ){
            //     \SMSGlobal\Credentials::set('4516eec6a32e175c9dfcaf822a8bcc9b', '00830b14fd2e47ef6071ff185c2374c3');
                                    
            //     $sms = new \SMSGlobal\Resource\Sms();
    
            //     $response = $sms->sendToOne('971'.$request->phone, "Your verification code is : $code \n First Call Service");
                
            //     if( isset($response['messages'][0]['status']) ){
            //         return response()->json([
            //             'status' => 'warning',
            //             'message' => 'A verification code send to your mobile',
            //             'data' => $customer->phone
            //         ],200); 
            //     }
            //     else{
            //         return response()->json([
            //             'status' => 'error',
            //             'message' => 'Failed To Send SMS',
            //         ],200); 
            //     }
            // }

        }
        else{
            // login
            $credentials = request(['phone', 'password']);

            if (! $token = auth()->attempt($credentials)) {
                return response()->json(['status' => 'error', 'data' => 'Invalid Credential'], 200);
            }

            return $this->respondWithToken($token, $customer);
        }

        
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function profile(){
        try{
            $customer = Customer::where('id',auth()->user()->id)
                            ->select("name", "image", "phone", "email", "address", "emirate_id", "area_id", "zone_id", "point", "point_expiry_date", "is_active" )
                            ->first();
            return response()->json([
                'status' => 'success',
                'data' => $customer
            ],200); 

        }
        catch( Exception $e ){
            return response()->json([
                'status' => 'error',
                'data' => $e->getMessage()
            ],200);
        }

        // return response()->json(auth()->user());
    }


    //reset_password function start
    public function reset_password(Request $request){
        try{
            $validator = Validator::make($request->all(),[
                "password" => "required|min:8|confirmed",
                "phone" => "required|exists:customers,phone",
            ]);

            if( $validator->fails() ){
                return response()->json([
                    'status' => 'error',
                    'data' => $validator->errors()
                ],200);
            }
            else{
                $customer = Customer::where("phone", $request->phone)->first();

                $customer->password = Hash::make($request->password);

                if( $customer->save() ){
                    return response()->json([
                        'status' => 'success',
                        'data' => 'Password reset successfully done'
                    ],200);
                }
            }
        }
        catch( Exception $e ){
            return response()->json([
                'status' => 'error',
                'data' => $e->getMessage()
            ],200);
        }
    }
    //reset_password function end


    //update_profile function start
    public function update_profile(Request $request){
        try{
            $customer = Customer::find($request->customer_id);

            if( $customer ){
                $validator = Validator::make($request->all(),[
                    "name" => "required",
                    "email" => "required|unique:customers,email,".$customer->id,
                    "address" => "required",
                ]);
    
                if( $validator->fails() ){
                    return response()->json([
                        'status' => 'error',
                        'data' => $validator->errors()
                    ],200);
                }
                else{
                    $customer->name = $request->name;
                    $customer->email = $request->email;
                    $customer->address = $request->address;

                    // image upload 
                    if( $request->image ){
                        if( File::exists('images/customer/'. $customer->image) ){
                            File::delete('images/customer/'. $customer->image);
                        }
                        $image = $request->file('image');
                        $img = Str::slug($request->name) . time().Str::random(12).'.'.$image->getClientOriginalExtension();
                        $location = public_path('images/customer/'.$img);
                        Image::make($image)->save($location);
                        $customer->image = $img;
                    }

                    if( $customer->save() ){
                        return response()->json([
                            'status' => 'success',
                            'data' => new CustomerResource($customer)
                        ],200);
                    }

                }
            }
            else{
                return response()->json([
                    'status' => 'error',
                    'data' => 'Invalid customer'
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
    //update_profile function end


    //change_password function start
    public function change_password(Request $request){
        try{
            $customer = Customer::find($request->customer_id);

            if( $customer ){
                $validator = Validator::make($request->all(),[
                    "old_password" => "required",
                    "password" => "required|min:6|confirmed",
                ]);
    
                if( $validator->fails() ){
                    return response()->json([
                        'status' => 'error',
                        'data' => $validator->errors()
                    ],200);
                }
                else{
                    
                    if( Hash::check($request->old_password,$customer->password) ){
                        $customer->password = Hash::make($request->password);

                        if( $customer->save() ){
                            return response()->json([
                                'status' => 'success',
                                'data' => 'Password Updated'
                            ],200);
                        }
                    }
                    else{
                        return response()->json([
                            'status' => 'error',
                            'data' => 'Old password not matched'
                        ],200);
                    }

                }
            }
            else{
                return response()->json([
                    'status' => 'error',
                    'data' => 'Invalid customer'
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
    //change_password function end


    //manage_session function start
    public function manage_session(Request $request){
        try{
            
            if( auth('api')->check() ){
                $customer = Customer::where("id", auth('api')->user()->id)->first();

                return response()->json([
                    'status' => 'success',
                    'data' => new CustomerResource($customer)
                ],200);
            }
            else{
                return response()->json([
                    'status' => 'error',
                    'data' => 'Token expire. Please login again'
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
    //manage_session function end

    

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();
        return response()->json(['status' => 'success', 'data' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh($token, $customer)
    {
        return $this->respondWithToken(auth()->refresh(), $customer);
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token, $customer)
    {
        return response()->json([
            'status' => 'success',
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'data' => new CustomerResource($customer)
        ]);
    }
}