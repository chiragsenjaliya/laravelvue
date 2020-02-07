<?php

use Illuminate\Http\Request;

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

Route::post('/admin/login', 'Admin/Auth/AdminLoginController@Login');

Route::middleware('auth:api')->group(function (){
	Route::post('/admin/logout','Admin/Auth/AdminLoginController@logout');
	Route::get('/admin/','Admin/Auth/AdminLoginController@getAdmin');
});

