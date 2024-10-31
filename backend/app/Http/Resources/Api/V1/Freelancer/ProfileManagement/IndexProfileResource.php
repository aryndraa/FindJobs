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
               "bio"     => $this->freelancerProfile->bio ?? null,
               "about"   => $this->freelancerProfile->about ?? null,
               "phone"   => $this->freelancerProfile->phone ?? null,
               "country" => $this->freelancerProfile->country ?? null,
               "skills"  => $this->freelancerProfile->freelancerSkills->map(function ($skill) {
                   return [

                       "id"   => $skill->category->id ?? null,
                       "name" => $skill->category->name ?? null,
                   ];
               }),
                "avatar" => [
                    "file_name" => $this->freelancerProfile->avatar->file_name ?? null,
                    "file_type" => $this->freelancerProfile->avatar->file_type ?? null,
                    "file_path" => $this->freelancerProfile->avatar->file_url ?? null,
                ],
                "back_cover" => [
                    "file_name" => $this->freelancerProfile->backCover->file_name ?? null,
                    "file_type" => $this->freelancerProfile->backCover->file_type ?? null,
                    "file_path" => $this->freelancerProfile->backCover->file_url ?? null,
                ]
            ]
        ];
    }
}
