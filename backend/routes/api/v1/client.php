<?php


use App\Http\Controllers\Api\V1\Client\Authentication\AuthenticationController;
use App\Http\Controllers\Api\V1\Client\FreelancerManagement\FreelancerManagementController;
use App\Http\Controllers\Api\V1\Client\ProfileManagement\ProfileManagementController;
use App\Http\Controllers\Api\V1\Client\ProjectManagement\ProjectManagementController;
use App\Http\Controllers\Api\V1\Client\ServiceManagement\ServiceManagementController;
use Illuminate\Support\Facades\Route;

Route::prefix('v1/client/')
    ->name('client.')
    ->group(function () {
        Route::controller(AuthenticationController::class)
            ->prefix('auth')
            ->name('auth.')
            ->group(function () {
                Route::post('/login', 'login')->name('login');
                Route::post('/register', 'register')->name('register');
            });

        Route::middleware('auth:client')
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
                        Route::get('list-bidders/{project}', 'listBidders')->name('listBidders');
                        Route::post('accept/{project}/{freelancer}', 'acceptBid')->name('acceptBid');
                    });

                Route::controller(ServiceManagementController::class)
                    ->prefix('service-management')
                    ->name('service-management.')
                    ->group(function () {
                        Route::get('/', 'index')->name("index");
                        Route::get('/{service}', 'show')->name("show");
                        Route::get('/like/{service}', 'like')->name("like");
                    });

                Route::controller(FreelancerManagementController::class)
                    ->prefix('freelancer-management')
                    ->name('freelancer-management.')
                    ->group(function () {
                        Route::get('/', 'index')->name("index");
                        Route::get('/{freelancer}', 'show')->name("show");
                        Route::get('/star/{freelancer}', 'star')->name("star");
                    });
            });
    });
