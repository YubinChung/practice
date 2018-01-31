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


Route::post('/login', 'AuthenticateController@authenticate');
Route::post('/register', 'AuthenticateController@register');
//Route::middleware('auth:api')->get('/login', function (Request $request) {
//    return $request->user();
//});

Route::group(['middleware' => 'jwt.auth'], function() {
   Route::get('/todos', 'TodoController@index');
   Route::post('/todo', 'TodoController@store');
});

// Route::middleware('jwt.auth') 라고 써놓으셨네요 샘은