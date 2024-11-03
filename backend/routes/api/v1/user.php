<?php

use App\Http\Controllers\Api\V1\User\Category\CategoryController;
use App\Http\Controllers\Api\V1\User\FreelancerManagement\FreelancerManagementController;
use App\Http\Controllers\Api\V1\User\ProjectManagement\ProjectManagementController;
use Illuminate\Support\Facades\Route;

Route::prefix('v1/user/')
    ->name('user.')
    ->group(function () {
        Route::controller(ProjectManagementController::class)
            ->prefix('project-management')
            ->name('project-management.')
            ->group(function () {
                Route::get('/', 'index');
                Route::get('/{categoryIds}', 'projectByCategoryId');
                Route::get('/detail/{project}', 'show');
            });

        Route::controller(CategoryController::class)
            ->prefix('category')
            ->name('category.')
            ->group(function () {
                Route::get('/', 'index')->name("index");
                Route::get('/all', 'all')->name("all");
            });

        Route::controller(FreelancerManagementController::class)
            ->prefix('freelancer-management')
            ->name('freelancer-management.')
            ->group(function () {
                Route::get('/', 'index')->name("index");
            });
    });
