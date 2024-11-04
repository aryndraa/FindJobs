<?php

namespace App\Http\Controllers\Api\V1\User\FreelancerManagement;

use App\Http\Controllers\Controller;
use App\Http\Resources\Api\V1\User\FreelancerManagement\IndexFreelancerResoource;
use App\Http\Resources\Api\V1\User\FreelancerManagement\ShowFreelancerResource;
use App\Models\Freelancer;
use Illuminate\Http\Request;

class FreelancerManagementController extends Controller
{
    public function index()
    {
        $freelancers = Freelancer::with([
            'profile',
            'profile.avatar',
            'profile.backCover',
        ])
            ->simplePaginate(100);

        foreach ($freelancers as $freelancer) {
            $freelancer->total_projects = $freelancer->projectAcceptedBidders->count();
            $freelancer->total_likes    = $freelancer->services->sum(function ($service) {
                return $service->serviceLikes->count();
            });
            $freelancer->total_favorites = $freelancer->freelancerStar->count();
        }

        return IndexFreelancerResoource::collection($freelancers);
    }

    public function show(Freelancer $freelancer)
    {
        $freelancer->load([
                'profile',
                'profile.avatar',
                "profile.backCover",
                "profile.freelancerSkills",
                "profile.freelancerSkills.category"
            ]);

        return ShowFreelancerResource::make($freelancer);
    }
}
