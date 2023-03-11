<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| 开放路由
|--------------------------------------------------------------------------
*/
Route::post('register', 'AuthController@teacherRegister');

/*
|--------------------------------------------------------------------------
| 认证路由
|--------------------------------------------------------------------------
*/
Route::group(['middleware' => 'auth:teacher'], function () {
    Route::apiResource('schools', 'SchoolsController');
});
