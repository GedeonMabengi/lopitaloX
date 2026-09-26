<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use RuntimeException;

class PaymentGatewayService
{
    protected string $apikey;

    protected string $siteId;

    protected string $baseUrl;

    public function __construct()
    {
        $this->apikey = (string) config('services.cinetpay.apikey');
        $this->siteId = (string) config('services.cinetpay.site_id');
        $this->baseUrl = rtrim((string) config('services.cinetpay.base_url', 'https://api-checkout.cinetpay.com/v2'), '/');
    }

    /**
     * Initialise un paiement CinetPay et renvoie le token + l'URL de paiement.
     *
     * @return array{payment_token: string, payment_url: string}
     */
    public function initiatePayment(
        float $amount,
        string $transactionId,
        string $currency = 'XOF',
        string $description = '',
        ?string $notifyUrl = null,
        ?string $returnUrl = null,
    ): array {
        $response = Http::asJson()
            ->acceptJson()
            ->post($this->baseUrl.'/payment', [
                'apikey' => $this->apikey,
                'site_id' => $this->siteId,
                'transaction_id' => $transactionId,
                'amount' => (int) round($amount),
                'currency' => $currency,
                'description' => $description,
                'channels' => 'ALL',
                'notify_url' => $notifyUrl,
                'return_url' => $returnUrl,
            ]);

        $code = (string) $response->json('code');

        if ($response->successful() && in_array($code, ['201', '0'], true)) {
            return [
                'payment_token' => (string) $response->json('data.payment_token'),
                'payment_url' => (string) $response->json('data.payment_url'),
            ];
        }

        throw new RuntimeException(
            $response->json('message') ?? $response->json('description') ?? 'Erreur lors de l\'initialisation du paiement CinetPay.'
        );
    }

    /**
     * Vérifie le statut d'une transaction CinetPay.
     *
     * @return array<string, mixed>
     */
    public function checkPaymentStatus(string $transactionId): array
    {
        return Http::asJson()
            ->acceptJson()
            ->post($this->baseUrl.'/payment/check', [
                'apikey' => $this->apikey,
                'site_id' => $this->siteId,
                'transaction_id' => $transactionId,
            ])
            ->json() ?? [];
    }
}
