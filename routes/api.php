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

Route::post('login', 'LoginController@login');
Route::post('logout', 'LoginController@logout');
Route::post('register', 'LoginController@register');

Route::group(['middleware' => 'jwt.recycle'], function(){
    Route::resource('karyawan', 'KaryawanController');
    Route::resource('menu', 'MenuController');
    Route::resource('transaksi', 'TransaksiController');

    Route::get('transaksi-menu', 'TransaksiController@menu');
    Route::get('mutasi', 'MutasiMenuController@index');
    Route::get('refresh', 'LoginController@refresh');
});
