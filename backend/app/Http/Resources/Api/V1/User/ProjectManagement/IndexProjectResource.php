<?php

namespace App\Http\Resources\Api\V1\User\ProjectManagement;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

class IndexProjectResource extends JsonResource
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
            "description"        => Str::limit($this->description, 50),
            "price_min"          => $this->price_min,
            "price_max"          => $this->price_max,
            "currency"           => $this->currency,
            "is_completed"       => $this->is_completed,
            "bid_status"         => $this->bid_status,
            "created_at"         => $this->created_at,
            "project_categories" => $this->projectCategories->map(function ($projectCategory) {
                return [
                  "id"   => $projectCategory->category->id ?? null,
                  "name" => $projectCategory->category->name ?? null,
                ];
            }),
            "user" => [
                "id" => $this->user->id,
                "name" =>$this->user->name,
                "avatar" => [
                    "file_name" => $this->user->profile->avatar->file_name ?? null,
                    "file_path" => $this->user->profile->avatar->file_path ?? null,
                    "file_type" => $this->user->profile->avatar->file_type ?? null,
                ],
            ]
        ];
    }
}
