<?php


use App\Http\Controllers\Api\V1\Client\Authentication\AuthenticationController;
use Illuminate\Support\Facades\Route;

Route::prefix('v1/client/')
    ->name('client.')
    ->group(function () {
        Route::controller(AuthenticationController::class)
            ->prefix('auth/')
            ->name('auth.')
            ->group(function () {
                Route::post('login', 'login')->name('login');
                Route::post('register', 'register')->name('register');
            });

        Route::middleware('auth:client')
            ->group(function () {
                Route::delete('auth/logout', [AuthenticationController::class, 'logout'])->name('logout');
            });
    });
