<?php

namespace App\Http\Controllers\Api\V1\User\FreelancerManagement;

use App\Http\Controllers\Controller;
use App\Http\Resources\Api\V1\User\FreelancerManagement\IndexFreelancerResoource;
use App\Models\Freelancer;
use Illuminate\Http\Request;

class FreelancerManagementController extends Controller
{
    public function index()
    {
        $freelancers = Freelancer::with(['profile', 'profile.avatar', 'profile.backCover', 'projectAcceptedBidders'])
            ->simplePaginate(100);

        foreach ($freelancers as $freelancer) {
            $freelancer->total_project = $freelancer->projectAcceptedBidders->count();
        }

        return $freelancers;
    }

}
