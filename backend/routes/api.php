<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ServiceController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


//==================== Auth Routes ====================//
Route::group(['prefix' => 'auth'], function () {

	Route::post('register', [AuthController::class, 'register']);
	Route::post('resend-code', [AuthController::class, 'resend_code']);
	Route::post('verify', [AuthController::class, 'verify']);
	Route::post('login', [AuthController::class, 'login']);
	Route::post('logout', [AuthController::class, 'logout']);
	Route::post('refresh', [AuthController::class, 'refresh']);
	Route::post('profile', [AuthController::class, 'profile']);
	Route::post('update-profile', [AuthController::class, 'update_profile']);

	//forget password
	Route::post("reset-password",[AuthController::class,"reset_password"]);

});

//==================== session manage ====================//
Route::get("manage-session/{token}",[AuthController::class,"manage_session"]);

//delete user image
Route::post('delete-image', [AuthController::class, 'delete_image']);

//change password
Route::post('change-password', [AuthController::class, 'change_password']);


//get all service
Route::get("get-all-services/",[ServiceController::class,"get_all_service"]);