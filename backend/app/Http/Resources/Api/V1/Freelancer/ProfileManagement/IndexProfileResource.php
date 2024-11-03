<?php

namespace App\Http\Resources\Api\V1\Freelancer\ProfileManagement;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class IndexProfileResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id"       => $this->id ?? null,
            "name"     => $this->name ?? null,
            "username" => $this->username ?? null,
            "email"    => $this->email ?? null,
            "join_at"  => $this->created_at ?? null,
            "profile" => [
                "bio"     => $this->profile->bio ?? null,
                "about"   => $this->profile->about ?? null,
                "phone"   => $this->profile->phone ?? null,
                "country" => $this->profile->country ?? null,
                "skills"  => $this->profile->freelancerSkills->map(function ($skill) {
                    return [
                        "id"   => $skill->category->id ?? null,
                        "name" => $skill->category->name ?? null,
                    ];
                }),
                 "avatar" => [
                     "file_name" => $this->profile->avatar->file_name ?? null,
                     "file_type" => $this->profile->avatar->file_type ?? null,
                     "file_path" => $this->profile->avatar->file_url ?? null,
                 ],
                 "back_cover" => [
                     "file_name" => $this->profile->backCover->file_name ?? null,
                     "file_type" => $this->profile->backCover->file_type ?? null,
                     "file_path" => $this->profile->backCover->file_url ?? null,
                 ]
             ]
        ];
    }
}
