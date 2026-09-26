<?php

use App\Models\Lease;
use App\Models\User;

test('a payment can be recorded', function () {
    $user = User::factory()->create();
    $this->actingAs($user);

    $lease = Lease::factory()->create();

    $response = $this->post(route('payments.store'), [
        'lease_id' => $lease->id,
        'amount' => 800,
        'payment_date' => now()->toDateString(),
        'method' => 'bank_transfer',
        'status' => 'completed',
    ]);

    $response->assertRedirect();
    $this->assertDatabaseHas('payments', ['lease_id' => $lease->id]);
});
