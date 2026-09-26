<?php

namespace App\Http\Resources;

use App\Models\Message;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin Message */
class MessageResource extends JsonResource
{
    /**
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'client_uuid' => $this->client_uuid,
            'thread_id' => $this->thread_id,
            'sender_id' => $this->sender_id,
            'body' => $this->body,
            'attachments' => $this->attachments,
            'sender' => new UserResource($this->whenLoaded('sender')),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
