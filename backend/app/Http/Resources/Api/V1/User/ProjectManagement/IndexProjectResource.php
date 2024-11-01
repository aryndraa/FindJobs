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
            "created_at"         => $this->created_at,
            "project_categories" => $this->projectCategories->map(function ($projectCategory) {
                return [
                  "id"   => $projectCategory->category->id ?? null,
                  "name" => $projectCategory->category->name ?? null,
                ];
            }),
        ];
    }
}
