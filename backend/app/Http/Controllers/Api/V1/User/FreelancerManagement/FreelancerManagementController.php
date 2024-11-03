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
        $freelancers = Freelancer::with(['profile', 'profile.avatar', 'profile.backCover'])
            ->simplePaginate(100);

        return IndexFreelancerResoource::collection($freelancers);
    }
}
