<?php

namespace App\Http\Resources\Api\V1\Freelancer\FreelancerManagement;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class IndexFreelancerResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id"    => $this->id,
            "name"  => $this->name,
            "email" => $this->email,
            "avatar" => [
                "file_name" => $this->profile->avatar->file_name ?? null,
                "file_path" => $this->profile->avatar->file_path ?? null,
                "file_type" => $this->profile->avatar->file_type ?? null,
            ],
            "total_project"   => $this->total_projects,
            "total_likes"     => $this->total_likes,
            "total_favorites" => $this->total_favorites
        ];
    }
}
