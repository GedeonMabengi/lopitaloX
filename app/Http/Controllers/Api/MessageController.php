<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\MessageResource;
use App\Http\Resources\ThreadResource;
use App\Models\Message;
use App\Models\MessageThread;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class MessageController extends Controller
{
    use RoleScoping;

    public function index(Request $request): AnonymousResourceCollection
    {
        $user = $this->user();
        $threads = $user->messageThreads()
            ->with('participants')
            ->withCount('messages')
            ->orderByDesc('updated_at')
            ->paginate($request->integer('per_page', 50));

        return ThreadResource::collection($threads);
    }

    public function show(MessageThread $thread): ThreadResource
    {
        abort_unless($this->isParticipant($thread), 403, 'Accès refusé.');

        return new ThreadResource($thread->load('participants', 'messages.sender'));
    }

    public function storeMessage(Request $request, MessageThread $thread): JsonResponse
    {
        abort_unless($this->isParticipant($thread), 403, 'Accès refusé.');

        $data = $request->validate([
            'body' => ['required', 'string'],
            'attachments' => ['nullable', 'array'],
            'client_uuid' => ['nullable', 'uuid'],
        ]);

        // Idempotence : rejeu d'une opération de l'outbox mobile.
        if ($request->filled('client_uuid')) {
            $existing = Message::query()->where('client_uuid', $request->client_uuid)->first();
            if ($existing) {
                return response()->json((new MessageResource($existing->load('sender')))->resolve());
            }
        }

        $message = $thread->messages()->create([
            'sender_id' => $this->user()->id,
            'body' => $data['body'],
            'attachments' => $data['attachments'] ?? null,
            'client_uuid' => $request->client_uuid ?? null,
        ]);

        return response()->json((new MessageResource($message->load('sender')))->resolve(), 201);
    }

    private function isParticipant(MessageThread $thread): bool
    {
        return $this->isManager()
            || $thread->participants()->where('user_id', $this->user()->id)->exists();
    }
}
