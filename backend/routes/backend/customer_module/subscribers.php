<?php

use App\Http\Controllers\Backend\CustomerModule\Subscriber\SubscriberController;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'subscribers'], function(){

     //index
     Route::get("",[SubscriberController::class,"index"])->name("subscribers.all");

});

?>