<?php

use Illuminate\Support\Facades\Route;



Auth::routes();



//*************Front End***************
Route::get('/', [App\Http\Controllers\SiteController::class, 'Site']);

Route::post('/get-cus-mail/{email}',[
	'uses'		=>'SiteController@cusMail',
	'as'		=>'get-cus-mail'
]);