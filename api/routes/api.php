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


/**GET COUNTRY-CODE ROUTE*/
Route::get('/country', 'CountryController@index');

/**GET CODE-COUNTRY ROUTE*/
Route::get('/country-flip', 'CountryController@flip');


/**GET SORTED-COUNTRY ROUTE*/
Route::get('/country-sort', 'CountryController@sort');