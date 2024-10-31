<?php

namespace App\Http\Controllers\Api\V1\Client\ProfileManagement;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\V1\Client\ProfileManagement\StoreProfileRequest;
use App\Http\Requests\Api\V1\Client\ProfileManagement\UpdateProfileRequest;
use App\Http\Resources\Api\V1\Client\ProfileManagement\IndexProfileResource;
use App\Models\Client;
use App\Models\ClientProfile;
use App\Models\File;
use Illuminate\Support\Facades\Storage;

class ProfileManagementController extends Controller
{
    public function index()
    {
        $client = auth()->id();
        $profile = Client::query()
            ->where('id', $client)
            ->with(['clientProfile', 'clientProfile.avatar', "clientProfile.backCover"])
            ->first();

        return new IndexProfileResource($profile);
    }

    public function store(StoreProfileRequest $request)
    {
        $profile = CLientProfile::query()->make($request->validated());
        $client  = auth()->user();

        $profile->client()->associate($client);
        $profile->save();

        File::uploadFile($request->file('avatar'), $profile, 'avatar', 'client/avatars', 'avatar');

        $profile->load('avatar');

        return response()->json([
            'data' => $profile,
        ]);
    }

    public function update(UpdateProfileRequest $request)
    {
        $client = auth()->user();

        $profile = ClientProfile::updateOrCreate(
            ['client_id' => $client->id],
            $request->validated()
        );

        if ($avatar = $request->file('avatar')) {
            if ($profile->avatar) {
                Storage::disk('public')->delete($profile->avatar->file_path);
                $profile->avatar()->delete();
            }
            File::uploadFile($avatar, $profile, 'avatar', 'client/avatars', 'avatar');
        }

        if ($backCover = $request->file('back_cover')) {
            if ($profile->backCover) {
                Storage::disk('public')->delete($profile->backCover->file_path);
                $profile->backCover()->delete();
            }
            File::uploadFile($backCover, $profile, 'backCover', 'client/back_cover', 'back_cover');
        }

        $profile->load(['client', 'avatar', 'backCover']);

        return response()->json([
            'data' => $profile,
        ]);
    }


}
