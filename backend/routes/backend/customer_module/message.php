<?php

use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'message'], function(){

     //index
     Route::get("",[])->name("message.all");

});

?>