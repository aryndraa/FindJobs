<?php

namespace App\Http\Resources\Api\V1\Client\ProfileManagement;

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
            "profile"  => [
                "bio"     => $this->clientProfile->bio ?? null,
                "about"   => $this->clientProfile->about ?? null,
                "phone"   => $this->clientProfile->phone ?? null,
                "country" => $this->clientProfile->country ?? null,
                "avatar" => [
                    "file_name" => $this->clientProfile->avatar->file_name ?? null,
                    "file_type" => $this->clientProfile->avatar->file_type ?? null,
                    "file_path" => $this->clientProfile->avatar->file_url ?? null,
                ],
                "back_cover" => [
                    "file_name" => $this->clientProfile->backCover->file_name ?? null,
                    "file_type" => $this->clientProfile->backCover->file_type ?? null,
                    "file_path" => $this->clientProfile->backCover->file_url ?? null,
                ]
            ]
        ];
    }
}
