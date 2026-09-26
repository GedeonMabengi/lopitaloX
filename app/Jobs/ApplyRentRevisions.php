<?php

namespace App\Jobs;

use App\Models\Lease;
use App\Models\RentRevision;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class ApplyRentRevisions implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public function handle(): void
    {
        $today = now();

        $leases = Lease::where('status', 'active')
            ->whereMonth('start_date', $today->month)
            ->whereDay('start_date', $today->day)
            ->get();

        foreach ($leases as $lease) {
            $newRent = $this->calculateRevisedRent($lease);

            if ($newRent != $lease->rent_amount) {
                RentRevision::create([
                    'lease_id' => $lease->id,
                    'revision_date' => $today,
                    'old_rent' => $lease->rent_amount,
                    'new_rent' => $newRent,
                    'index_value' => $this->getIRL(),
                    'percentage_change' => ($newRent - $lease->rent_amount) / $lease->rent_amount * 100,
                    'applied' => true,
                ]);

                $lease->update(['rent_amount' => $newRent]);
            }
        }
    }

    private function calculateRevisedRent(Lease $lease): float
    {
        return round($lease->rent_amount * $this->getIRL(), 2);
    }

    private function getIRL(): float
    {
        // Récupérer l'indice IRL depuis une source officielle ou une table.
        return 1.02; // Exemple
    }
}
