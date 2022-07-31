<?php

use App\Http\Controllers\Backend\SettingsModule\Testimonial\TestimonialController;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'testimonial'], function(){

     //index
     Route::get("",[TestimonialController::class,"index"])->name("testimonial.all");

});

?>