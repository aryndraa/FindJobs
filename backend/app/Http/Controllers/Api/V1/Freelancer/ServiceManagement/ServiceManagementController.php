<?php

namespace App\Http\Controllers\Api\V1\Freelancer\ServiceManagement;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\V1\Freelancer\ServiceManagement\StoreServiceRequest;
use App\Http\Resources\Api\V1\Freelancer\ServiceManagement\IndexServiceResource;
use App\Http\Resources\Api\V1\Freelancer\ServiceManagement\MyServiceResource;
use App\Http\Resources\Api\V1\Freelancer\ServiceManagement\ShowServiceResource;
use App\Models\Category;
use App\Models\File;
use App\Models\Service;
use App\Models\ServiceCategory;
use App\Models\ServiceLike;
use App\Models\ServiceVisitor;

class ServiceManagementController extends Controller
{
    public function index()
    {
        $services = Service::query()
            ->with([
                'freelancer',
                'freelancer.profile.avatar',
                'serviceCategories.category',
                'image'
            ])->simplePaginate('12');

        foreach ($services as $service) {
            $service->visitor_count = $service->serviceVisitors->count();
        }

        foreach ($services as $service) {
            $service->like_count = $service->serviceLikes->count();
        }


        return IndexServiceResource::collection($services);
    }

    public function show(Service $service)
    {
        $service->load([
            'freelancer',
            'freelancer.profile.avatar',
            'serviceCategories.category',
            'image',
            'freelancer.services' => function ($query) use ($service) {
                $query->where('id', '!=', $service->id)
                    ->with([
                        'freelancer',
                        'freelancer.profile.avatar',
                        'serviceCategories.category',
                        'image'
                    ])->limit(4);
            }
        ]);

        $user = auth()->user();

        $viewExist = ServiceVisitor::query()
            ->where('service_id', $service->id)
            ->where('user_id', $user->id)
            ->exists();

        if (!$viewExist) {
            $serviceView = new ServiceVisitor();
            $serviceView->service()->associate($service);
            $serviceView->user()->associate($user);
            $serviceView->save();
        }

        $service->visitor_count = $service->serviceVisitors->count();
        $service->like_count = $service->serviceLikes->count();

        foreach ($service->freelancer->services as $otherService) {
            $otherService->visitor_count = $otherService->serviceVisitors->count();
        }

        foreach ($service->freelancer->services as $otherService) {
            $otherService->like_count = $otherService->serviceLikes->count();
        }
        return ShowServiceResource::make($service);
    }

    public function like(Service $service)
    {
        $user     = auth()->user();
        $favorite = ServiceLike::where('service_id', $service->id)
            ->where('user_id', $user->id)
            ->first();

        if ($favorite) {
            $favorite->delete();

            return response()->json([
                "message" => "remove to favorite"
            ]);
        }

        $serviceLike = new ServiceLike();
        $serviceLike->service()->associate($service);
        $serviceLike->user()->associate($user);
        $serviceLike->save();

        return response()->json([
            "message" => "add to favorite"
        ]);
    }

    public function myService()
    {
        $user = auth()->user();

        $services = Service::query()
            ->where('freelancer_id', $user->id)
            ->with([
                'serviceCategories.category',
                'image'
            ])->simplePaginate(12);

        foreach ($services as $service) {
            $service->visitor_count = $service->serviceVisitors->count();
        }

        foreach ($services as $service) {
            $service->like_count = $service->serviceLikes->count();
        }

        return MyServiceResource::collection($services);
    }

    public function store(StoreServiceRequest $request)
    {
        $freelancer = auth()->user();
        $service    = Service::query()->make($request->validated());

        $service->freelancer()->associate($freelancer->id);
        $service->save();

        File::uploadFile($request->file('image'), $service, 'image', 'freelancer/service-image', 'service-image');

        foreach($request->categories as $categoryId) {
            $serviceCategories = new ServiceCategory();

            $serviceCategories->service()->associate($service->id);
            $serviceCategories->category()->associate($categoryId);
            $serviceCategories->save();
        }

        return response()->json([
            "message" => "Service Create Is Successful ",
        ]);
    }

    public function update(StoreServiceRequest $request, Service $service)
    {
        $service->update($request->validated());

        $currentCategoryIds = $service->serviceCategories()->pluck('category_id')->toArray();
        $newCategoryIds     = $request->input('categories', []);

        foreach ($newCategoryIds as $categoryId) {
            if (!in_array($categoryId, $currentCategoryIds)) {
                $category = Category::find($categoryId);
                if ($category) {
                    $serviceCategory = $service->serviceCategories()->make();
                    $serviceCategory->category()->associate($category);
                    $serviceCategory->save();
                }
            }
        }

        foreach ($currentCategoryIds as $categoryId) {
            if (!in_array($categoryId, $newCategoryIds)) {
                $service->serviceCategories()->where('category_id', $categoryId)->delete();
            }
        }

        return response()->json([
            "message" => "Service Update Is Successful ",
        ]);
    }

    public function destroy(Service $service)
    {
        $service->delete();

        return response()->noContent();
    }
}
