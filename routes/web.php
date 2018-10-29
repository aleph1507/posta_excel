<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Spec::orderBy('created_at', 'desc')->paginate();
//     return view('welcome');
// })->middleware('auth');


// Route::get('/')

Auth::routes();

Route::get('/', 'SpecsController@index')->name('specs.index');

// Route::get('/home', 'HomeController@index')->name('home');

Route::post('/specs/store', 'SpecsController@store')->name('specs.store');

Route::get('/specs/{id}', 'SpecsController@show')->name('specs.show');
