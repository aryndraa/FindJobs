<?php

namespace App\Http\Resources\Api\V1\Client\Notification;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

class IndexNotificationResource extends JsonResource
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
            "notification_title" => $this->notification_title,
            "message"            => Str::limit($this->message, 20),
            "created_at"         => $this->created_at
        ];
    }
}
