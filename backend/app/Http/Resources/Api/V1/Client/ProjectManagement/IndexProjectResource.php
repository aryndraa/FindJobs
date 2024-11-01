<?php

namespace App\Http\Resources\Api\V1\Client\ProjectManagement;

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
            "created_at"         => $this->created_at,
            "project_categories" => $this->projectCategories->map(function ($projectCategory) {
                return [
                    "id"   => $projectCategory->category->id ?? null,
                    "name" => $projectCategory->category->name ?? null,
                ];
            }),
            "client" => [
                "id"       => $this->client->id,
                "username" => $this->client->username,
                "avatar"   => [
                    "file_name" => $this->client->clientProfile->avatar->file_name ?? null,
                    "file_type" => $this->client->clientProfile->avatar->file_type ?? null,
                    "file_path" => $this->client->clientProfile->avatar->file_url ?? null,
                ]
            ]
        ];
    }
}
