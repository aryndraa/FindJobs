<?php

namespace App\Http\Controllers\Api\V1\Freelancer\FreelancerManagement;

use App\Http\Controllers\Controller;
use App\Http\Resources\Api\V1\Freelancer\FreelancerManagement\IndexFreelancerResource;
use App\Http\Resources\Api\V1\Freelancer\FreelancerManagement\ShowFreelancerResource;
use App\Models\Freelancer;
use App\Models\FreelancerStar;
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

        return IndexFreelancerResource::collection($freelancers);
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

        $freelancer->total_projects = $freelancer->projectAcceptedBidders->count();
        $freelancer->total_likes    = $freelancer->services->sum(function ($service) {
            return $service->serviceLikes->count();
        });
        $freelancer->total_favorites = $freelancer->freelancerStar->count();

        return ShowFreelancerResource::make($freelancer);
    }

    public function star(Freelancer $freelancer)
    {
        $user         = auth()->user();
        $existingStar = FreelancerStar::query()
            ->where('user_id', $user->id)
            ->where('freelancer_id', $freelancer->id)
            ->first();


        if ($existingStar) {
            $existingStar->delete();

            return response()->json([
                "message" => "Star Removed",
            ]);
        }

        $star = new FreelancerStar();
        $star->freelancer()->associate($freelancer);
        $star->user()->associate($user);
        $star->save();

        return response()->json([
            "message" => "Star Freelancer",
        ]);
    }
}
