<?php

namespace App\Jobs;

use App\Models\Lease;
use App\Notifications\RentReminderNotification;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Notification;

class SendRentReminders implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public function handle(): void
    {
        $today = now();

        $dueLeases = Lease::where('status', 'active')
            ->whereHas('invoices', function ($query) use ($today) {
                $query->where('due_date', '<=', $today)
                    ->where('status', '!=', 'paid');
            })
            ->get();

        foreach ($dueLeases as $lease) {
            Notification::send($lease->tenant, new RentReminderNotification($lease, $today));
        }
    }
}
