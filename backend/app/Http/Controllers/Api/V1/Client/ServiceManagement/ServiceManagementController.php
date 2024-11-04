<?php

namespace App\Http\Controllers\Api\V1\Client\ServiceManagement;

use App\Http\Controllers\Controller;
use App\Http\Resources\Api\V1\Client\ServiceManagement\IndexServiceResource;
use App\Http\Resources\Api\V1\Client\ServiceManagement\ShowServiceResource;
use App\Models\Service;
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
            ])->get();

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
}
