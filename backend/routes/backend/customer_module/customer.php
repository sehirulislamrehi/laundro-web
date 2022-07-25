<?php

use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'customer'], function(){

     //index
     Route::get("",[])->name("customer.all");

});

?>