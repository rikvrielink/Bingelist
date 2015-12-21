<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::group(['prefix' => 'api', 'namespace' => 'Api'], function () {

	header("Access-Control-Allow-Origin: *");
	header('Access-Control-Allow-Credentials: true');

	Route::post('list/{category}', 'ListController@store');
	Route::resource('list', 'ListController', [
		'only' => [
			'show'
		]
	]);
});