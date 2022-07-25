<?php

use App\Http\Controllers\Backend\CustomerModule\Message\MessageController;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'message'], function(){

     //index
     Route::get("",[MessageController::class,"index"])->name("message.all");

});

?>