<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\NotificationResource;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class NotificationController extends Controller
{
    use RoleScoping;

    public function index(Request $request): AnonymousResourceCollection
    {
        $notifications = $this->user()->notifications()
            ->orderByDesc('created_at')
            ->paginate($request->integer('per_page', 50));

        return NotificationResource::collection($notifications);
    }

    public function markRead(string $notificationId): JsonResponse
    {
        $notification = $this->user()->notifications()->findOrFail($notificationId);
        $notification->markAsRead();

        return response()->json(['message' => 'ok']);
    }

    public function markAllRead(): JsonResponse
    {
        $this->user()->unreadNotifications->markAsRead();

        return response()->json(['message' => 'ok']);
    }
}
