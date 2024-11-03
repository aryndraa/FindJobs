<?php

use App\Http\Controllers\Api\V1\Freelancer\Authentication\AuthenticationController;
use App\Http\Controllers\Api\V1\Freelancer\ProfileManagement\ProfileManagementController;
use App\Http\Controllers\Api\V1\Freelancer\ProjectManagement\ProjectManagementController;
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

                Route::controller(ProfileManagementController::class)
                    ->prefix('profile-management')
                    ->name('profile-management.')
                    ->group(function () {
                       Route::get('/', 'index')->name('index');
                       Route::post('', 'store')->name('store');
                       Route::post('/update', 'update')->name('update');
                    });

                Route::controller(ProjectManagementController::class)
                    ->prefix('project-management')
                    ->name('project-management.')
                    ->group(function () {
                        Route::get('/', 'index')->name('index');
                        Route::get('/my-projects', 'myProjects')->name('myProjects');
                        Route::post('', 'store')->name('store');
                        Route::post('update/{project}', 'update')->name('update');
                        Route::post('complete/{project}', 'isComplete')->name('isComplete');
                        Route::post('bid-status/{project}', 'bidStatus')->name('bidStatus');
                        Route::post('bid/{project}', 'bidProject')->name('bidProject');

                    });
            });
    });
