<?php

namespace App\Http\Controllers\Api\V1\Freelancer\ProfileManagement;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\V1\Freelancer\ProfileManagement\StoreProfileRequest;
use App\Http\Requests\Api\V1\Freelancer\ProfileManagement\UpdateProfileRequest;
use App\Http\Resources\Api\V1\Freelancer\ProfileManagement\IndexProfileResource;
use App\Models\File;
use App\Models\Freelancer;
use App\Models\FreelancerProfile;
use Illuminate\Support\Facades\Storage;

class ProfileManagementController extends Controller
{
    public function index()
    {
        $user = auth()->id();
        $profile = Freelancer::query()
            ->where('id', $user)
            ->with([
                'profile',
                'profile.avatar',
                "profile.backCover",
                "profile.freelancerSkills",
                "profile.freelancerSkills.category"
            ])
            ->first();

        return IndexProfileResource::make($profile);
    }

    public function store(StoreProfileRequest $request)
    {
        $profile = FreelancerProfile::query()->make($request->validated());
        $freelancer = auth()->user();

        $profile->freelancer()->associate($freelancer);
        $profile->save();

        File::uploadFile($request->file('avatar'), $profile, 'avatar', 'freelancer/avatars', 'avatar');

        foreach ($request->categories as $categoryId) {
            $profile->freelancerSkills()->create([
                'category_id' => $categoryId,
            ]);
        }

        $freelancer->load([
            'profile',
            'profile.avatar',
            'profile.backCover',
            'profile.freelancerSkills']);

        return response()->json([
            'data' => $freelancer,
        ]);
    }

    public function update(UpdateProfileRequest $request)
    {
        $freelancer = auth()->user();

        $profile =   FreelancerProfile::updateOrCreate(
            ['freelancer_id' => $freelancer->id],
            $request->validated()
        );

        if ($avatar = $request->file('avatar')) {
            if ($profile->avatar) {
                Storage::disk('public')->delete($profile->avatar->file_path);
                $profile->avatar()->delete();
            }

            File::uploadFile($avatar, $profile, 'avatar', 'freelancer/avatars', 'avatar');
        }

        if ($backCover = $request->file('back_cover')) {
            if ($profile->backCover) {
                Storage::disk('public')->delete($profile->backCover->file_path);
                $profile->backCover()->delete();
            }

            File::uploadFile($backCover, $profile, 'backCover', 'freelancer/back_covers', 'back_cover');
        }

        $currentCategoryIds = $profile->freelancerSkills()->pluck('category_id')->toArray();
        $newCategoryIds     = $request->categories;

        foreach ($newCategoryIds as $categoryId) {
            if (!in_array($categoryId, $currentCategoryIds)) {
                $profile->freelancerSkills()->create([
                    'category_id' => $categoryId,
                ]);
            }
        }

        foreach ($currentCategoryIds as $categoryId) {
            if (!in_array($categoryId, $newCategoryIds)) {
                $profile->freelancerSkills()->where('category_id', $categoryId)->delete();
            }
        }

        $freelancer->load(['freelancerProfile', 'freelancerProfile.avatar', "freelancerProfile.backCover", "freelancerProfile.freelancerSkills"]);

        return new IndexProfileResource($freelancer );
    }
}
