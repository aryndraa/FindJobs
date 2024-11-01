<?php

namespace App\Http\Controllers\Api\V1\User\Category;

use App\Http\Controllers\Controller;
use App\Http\Resources\Api\V1\User\CategoryManagement\CategoryResource;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::query()
            ->limit(10)
            ->get();

        return CategoryResource::collection($categories);
    }

    public function all()
    {
        $categories = Category::query()->get();

        return CategoryResource::collection($categories);
    }
}
