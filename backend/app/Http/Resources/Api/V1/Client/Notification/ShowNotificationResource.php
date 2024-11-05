<?php

namespace App\Http\Resources\Api\V1\Client\Notification;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ShowNotificationResource extends JsonResource
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
            "message"            => $this->message,
            "created_at"         => $this->created_at
        ];
    }
}
