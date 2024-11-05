<?php

namespace App\Http\Controllers\Api\V1\Client\Chat;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\V1\Freelancer\Chat\SendingChatRequest;
use App\Http\Resources\Api\V1\Client\Chat\ChatResource;
use App\Models\Client;
use App\Models\Freelancer;
use App\Models\UserChat;

class ChatController extends Controller
{
    public function listChat()
    {
        $user = auth()->user();

        $chatUserIds = UserChat::where('sender_id', $user->id)
            ->orWhere('receiver_id', $user->id)
            ->where(function($query) use ($user) {
                $query->where('sender_id', '!=', $user->id)
                    ->orWhere('receiver_id', '!=', $user->id);
            })
            ->get()
            ->map(function($chat) use ($user) {
                return $chat->sender_id === $user->id ? $chat->receiver_id : $chat->sender_id;
            })
            ->unique()
            ->values();

        $freelancerChats = Freelancer::whereIn('id', $chatUserIds)->get();
        $clientChats = Client::whereIn('id', $chatUserIds)->get();

        $chatUsers = $freelancerChats->merge($clientChats);

        return $chatUsers;
    }

    public function sendingMessage(SendingChatRequest $request, $receiver_type, $receiver_id)
    {
        $user = auth()->user();

        $receiverClass = 'App\\Models\\' . ucfirst($receiver_type);
        if (!class_exists($receiverClass)) {
            return response()->json(['error' => 'Invalid receiver type.'], 400);
        }

        $receiver = $receiverClass::find($receiver_id);
        if (!$receiver) {
            return response()->json(['error' => 'Receiver not found.'], 404);
        }

        $chat = new UserChat($request->validated());

        $chat->sender()->associate($user);
        $chat->receiver()->associate($receiver);

        $chat->save();

        return response()->json([
            'chat' => $chat
        ]);
    }

    public function receiving($otherUserId)
    {
        $user = auth()->user();

        $messages = UserChat::where(function ($query) use ($user, $otherUserId) {
            $query->where('sender_id', $user->id)
                ->where('sender_type', get_class($user))
                ->where('receiver_id', $otherUserId);
        })
            ->orWhere(function ($query) use ($user, $otherUserId) {
                $query->where('receiver_id', $user->id)
                    ->where('receiver_type', get_class($user))
                    ->where('sender_id', $otherUserId);
            })
            ->orderBy('created_at', 'asc')
            ->get();

        return ChatResource::collection($messages);
    }
}
