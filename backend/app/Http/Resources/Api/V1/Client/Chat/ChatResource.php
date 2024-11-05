<?php

namespace App\Http\Resources\Api\V1\Client\Chat;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ChatResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "sender_type"   => $this->sender_type,
            "sender_id"     => $this->sender_id,
            "receiver_type" => $this->receiver_type,
            "receiver_id"   => $this->receiver_id,
            "message"       => $this->message
        ];
    }
}
