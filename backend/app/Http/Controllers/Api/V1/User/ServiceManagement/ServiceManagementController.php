<?php

namespace App\Http\Controllers\Api\V1\User\ServiceManagement;

use App\Http\Controllers\Controller;
use App\Http\Resources\Api\V1\User\ServiceManagement\IndexServiceResource;
use App\Http\Resources\Api\V1\User\ServiceManagement\ShowServiceResource;
use App\Models\Service;

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
}
