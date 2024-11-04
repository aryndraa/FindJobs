<?php

namespace App\Http\Resources\Api\V1\Client\ServiceManagement;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

class ShowServiceResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id"          => $this->id,
            "name"        => $this->name,
            "description" => $this->description,
            "price"       => $this->price,
            "created_at"  => $this->created_at,
            "freelancer"  => [
                "id"     => $this->freelancer->id,
                "name"   => $this->freelancer->name,
                "avatar" => [
                    "file_path" => $this->freelancer->profile->avatar->file_path ?? null,
                    "file_name" => $this->freelancer->profile->avatar->file_name ?? null,
                    "file_type" => $this->freelancer->profile->avatar->file_type ?? null,
                ]
            ],
            "service_categories" => $this->serviceCategories->map(function ($serviceCategory) {
                return [
                    "id"   => $serviceCategory->category->id ?? null,
                    "name" => $serviceCategory->category->name ?? null,
                ];
            }),
            "visitor" => $this->visitor_count,
            "like"    => $this->like_count,
            "image"   => [
                "file_path" => $this->image->file_path ?? null,
                "file_name" => $this->image->file_name ?? null,
                "file_type" => $this->image->file_type ?? null,
            ],
            "freelancer_other_services" => $this->freelancer->services->map(function ($service) {
                return [
                    "id"          => $service->id,
                    "name"        => $service->name,
                    "description" => Str::limit($service->description, 50),
                    "price"       => $service->price,
                    "created_at"  => $service->created_at,
                    "service_categories" => $service->serviceCategories->map(function ($serviceCategory) {
                        return [
                            "id"   => $serviceCategory->category->id ?? null,
                            "name" => $serviceCategory->category->name ?? null,
                        ];
                    }),
                    "visitor" => $service->visitor_count,
                    "like"    => $service->like_count
                ];
            })

        ];
    }
}
