<?php

use App\Http\Controllers\Api\V1\Freelancer\Authentication\AuthenticationController;
use Illuminate\Support\Facades\Route;

Route::prefix('v1/freelancer/')
    ->name('freelancer.')
    ->group(function () {
        Route::controller(AuthenticationController::class)
            ->prefix('auth/')
            ->name('auth.')
            ->group(function () {
                Route::post('login', 'login')->name('login');
                Route::post('register', 'register')->name('register');
            });

        Route::middleware('auth:freelancer')
            ->group(function () {
                Route::delete('auth/logout', [AuthenticationController::class, 'logout'])->name('logout');
            });
    });
