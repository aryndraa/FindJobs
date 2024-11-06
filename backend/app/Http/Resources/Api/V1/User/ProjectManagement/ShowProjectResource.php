<?php

namespace App\Http\Resources\Api\V1\User\ProjectManagement;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

class ShowProjectResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id"                 => $this->id,
            "title"              => $this->title,
            "description"        => $this->description,
            "project_categories" => $this->projectCategories->map(function ($projectCategory) {
                return [
                    "id"   => $projectCategory->category->id ?? null,
                    "name" => $projectCategory->category->name ?? null,
                ];
            }),
            "project_details" => [
                "created_at" => $this->created_at,
                "bid_status" => $this->bid_status,
                "bid_queue"  => $this->bidders_count,
                "price_min"  => $this->price_min,
                "price_max"  => $this->price_max,
            ],
            "user" => [
                "id"       => $this->user->id,
                "username" => $this->user->username,
                "email"    => $this->user->email,
                "avatar"   => [
                    "file_name" => $this->user->clientProfile->avatar->file_name ?? null,
                    "file_type" => $this->user->clientProfile->avatar->file_type ?? null,
                    "file_path" => $this->user->clientProfile->avatar->file_url ?? null,
                ]
            ],
            "user_other_projects" => $this->user->projects->map(function ($project) {
                return [
                    "id"          => $project->id,
                    "title"       => $project->title,
                    "description" => $project->description,
                    "price_min"   => $project->price_min,
                    "categories"  => $project->projectCategories->map(function ($projectCategory) {
                        return [
                            "id"   => $projectCategory->id ?? null,
                            "name" => $projectCategory->name ?? null,
                        ];
                    })
                ];
            }) ?? null
        ];
    }
}