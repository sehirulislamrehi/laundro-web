<?php

use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'subscribers'], function(){

     //index
     Route::get("",[])->name("subscribers.all");

});

?>