<?php

namespace App\Http\Controllers\Api\V1\Client\Notification;

use App\Http\Controllers\Controller;
use App\Http\Resources\Api\V1\Client\Notification\IndexNotificationResource;
use App\Http\Resources\Api\V1\Client\Notification\ShowNotificationResource;
use App\Models\Notification;
use Illuminate\Http\Request;

class NotificationController extends Controller
{
    public function index()
    {
        $user = auth()->user();
        $notifications = $user->notifications;

        return IndexNotificationResource::collection($notifications);
    }

    public function show(Notification $notification)
    {
        return ShowNotificationResource::make($notification);
    }

    public function delete(Notification $notification)
    {
        $notification->delete();

        return response()->noContent();
    }
}
