<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use RuntimeException;

class AiClassifierService
{
    protected string $apiKey;

    protected string $baseUrl;

    protected string $model;

    public function __construct()
    {
        $this->apiKey = (string) config('services.deepseek.api_key');
        $this->baseUrl = rtrim((string) config('services.deepseek.base_url', 'https://api.deepseek.com'), '/');
        $this->model = (string) config('services.deepseek.model', 'deepseek-chat');
    }

    public function classifyMaintenanceRequest(string $description): string
    {
        $response = Http::withToken($this->apiKey)
            ->acceptJson()
            ->post($this->baseUrl.'/chat/completions', [
                'model' => $this->model,
                'messages' => [
                    [
                        'role' => 'system',
                        'content' => 'Tu es un assistant qui classifie les demandes de maintenance immobilière. Réponds uniquement avec une seule catégorie parmi : plomberie, electricite, chauffage, serrurerie, autre.',
                    ],
                    [
                        'role' => 'user',
                        'content' => $description,
                    ],
                ],
                'max_tokens' => 10,
                'temperature' => 0,
            ]);

        $content = $response->json('choices.0.message.content');

        if (! is_string($content) || trim($content) === '') {
            throw new RuntimeException(
                $response->json('error.message') ?? 'Réponse invalide de l\'API DeepSeek.'
            );
        }

        return trim($content);
    }
}
