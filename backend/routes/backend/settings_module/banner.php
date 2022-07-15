<?php

use App\Http\Controllers\Backend\SettingsModule\BannerController;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'banners'], function(){

     //index route
     Route::get("",[BannerController::class,"index"])->name("banner.all");

     //data route
     Route::get("data",[BannerController::class,"data"])->name("banner.data");

     //add route
     Route::get("add-modal",[BannerController::class,"add_modal"])->name("banner.add.modal");

});

?>