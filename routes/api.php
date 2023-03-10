<?php

use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'v1'], function () {
    Route::post('/login', 'AuthController@login');

    // 教师路由
    Route::group(
        ['prefix' => 'teacher'],
        base_path('routes/teacher.php')
    );

    // 学生路由
    Route::group(
        ['prefix' => 'student'],
        base_path('routes/student.php')
    );
});
