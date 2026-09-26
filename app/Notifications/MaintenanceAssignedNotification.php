<?php

namespace App\Notifications;

use App\Models\MaintenanceRequest;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class MaintenanceAssignedNotification extends Notification implements ShouldQueue
{
    use Queueable;

    public function __construct(
        protected MaintenanceRequest $request,
    ) {}

    /**
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail', 'database'];
    }

    public function toMail(object $notifiable): MailMessage
    {
        return (new MailMessage)
            ->subject('Intervention planifiée')
            ->greeting('Bonjour,')
            ->line('Un technicien a été assigné à votre demande de maintenance.')
            ->line('Catégorie : '.$this->request->category)
            ->line('Description : '.$this->request->description)
            ->line("Nous vous tiendrons informé de l'avancement.");
    }

    /**
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            'maintenance_request_id' => $this->request->id,
            'message' => 'Technicien assigné.',
        ];
    }
}
