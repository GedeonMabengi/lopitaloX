<?php

use App\Models\Property;
use App\Models\User;

test('a property can be created', function () {
    $user = User::factory()->create();
    $this->actingAs($user);

    $response = $this->post(route('properties.store'), [
        'owner_user_id' => $user->id,
        'name' => 'Test Property',
        'type' => 'apartment',
        'address' => '123 Main St',
        'city' => 'Paris',
        'postal_code' => '75001',
        'country' => 'France',
        'status' => 'active',
    ]);

    $response->assertRedirect();
    $this->assertDatabaseHas('properties', ['name' => 'Test Property']);
});

test('properties index is reachable', function () {
    $user = User::factory()->create();
    $this->actingAs($user);

    Property::factory()->create(['owner_user_id' => $user->id]);

    $this->get(route('properties.index'))->assertOk();
});
