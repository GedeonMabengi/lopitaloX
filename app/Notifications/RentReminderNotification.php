<?php

namespace App\Notifications;

use App\Models\Lease;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class RentReminderNotification extends Notification implements ShouldQueue
{
    use Queueable;

    public function __construct(
        protected Lease $lease,
        protected mixed $dueDate,
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
            ->subject('Rappel de paiement de loyer')
            ->greeting('Bonjour '.$this->lease->tenant->first_name.',')
            ->line('Votre loyer de '.$this->lease->rent_amount.' € est dû.')
            ->action('Payer en ligne', url('/tenant/payments'))
            ->line('Merci de votre confiance.');
    }

    /**
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            'lease_id' => $this->lease->id,
            'due_date' => $this->dueDate,
            'message' => 'Rappel de paiement envoyé.',
        ];
    }
}
