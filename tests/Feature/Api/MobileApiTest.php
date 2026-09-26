<?php

use App\Models\Lease;
use App\Models\MaintenanceRequest;
use App\Models\Property;
use App\Models\PropertyUnit;
use App\Models\Role;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Laravel\Sanctum\Sanctum;

function seedRoles(): void
{
    foreach (['admin', 'manager', 'owner', 'tenant', 'technician'] as $name) {
        Role::firstOrCreate(['name' => $name]);
    }
}

test('login retourne un token Sanctum', function () {
    User::factory()->create([
        'email' => 'manager@example.com',
        'password' => Hash::make('password'),
    ]);

    $this->postJson('/api/v1/login', [
        'email' => 'manager@example.com',
        'password' => 'password',
    ])->assertOk()
        ->assertJsonStructure(['token', 'user']);
});

test('les endpoints authentifiés exigent un token', function () {
    $this->getJson('/api/v1/me')->assertUnauthorized();
    $this->getJson('/api/v1/sync')->assertUnauthorized();
});

test('sync initial renvoie le bundle complet', function () {
    seedRoles();
    $manager = User::factory()->create();
    $manager->roles()->attach(Role::where('name', 'manager')->first());

    Property::factory()->create(['owner_user_id' => $manager->id]);

    Sanctum::actingAs($manager);

    $this->getJson('/api/v1/sync')
        ->assertOk()
        ->assertJsonStructure([
            'server_time',
            'since',
            'data' => [
                'properties',
                'property_units',
                'tenants',
                'leases',
                'payments',
                'invoices',
                'expenses',
                'maintenance_requests',
                'work_orders',
                'threads',
                'messages',
                'notifications',
            ],
            'deleted',
        ])
        ->assertJsonCount(1, 'data.properties');
});

test('création de demande de maintenance idempotente via client_uuid', function () {
    seedRoles();
    $manager = User::factory()->create();
    $manager->roles()->attach(Role::where('name', 'manager')->first());

    $property = Property::factory()->create(['owner_user_id' => $manager->id]);
    $unit = PropertyUnit::factory()->create(['property_id' => $property->id]);
    $tenant = Tenant::factory()->create();
    Lease::factory()->create([
        'tenant_id' => $tenant->id,
        'property_unit_id' => $unit->id,
        'status' => 'active',
    ]);

    Sanctum::actingAs($manager);

    $uuid = (string) Str::uuid();
    $payload = [
        'property_unit_id' => $unit->id,
        'category' => 'plomberie',
        'description' => 'Fuite sous l évier',
        'priority' => 'high',
        'client_uuid' => $uuid,
    ];

    $this->postJson('/api/v1/maintenance-requests', $payload)->assertCreated();
    $this->postJson('/api/v1/maintenance-requests', $payload)->assertOk();

    expect(MaintenanceRequest::where('client_uuid', $uuid)->count())->toBe(1);
});

test('outbox applique les opérations hors ligne', function () {
    seedRoles();
    $manager = User::factory()->create();
    $manager->roles()->attach(Role::where('name', 'manager')->first());

    $property = Property::factory()->create(['owner_user_id' => $manager->id]);
    $unit = PropertyUnit::factory()->create(['property_id' => $property->id]);
    $tenant = Tenant::factory()->create();
    Lease::factory()->create([
        'tenant_id' => $tenant->id,
        'property_unit_id' => $unit->id,
        'status' => 'active',
    ]);

    Sanctum::actingAs($manager);

    $uuid = (string) Str::uuid();

    $this->postJson('/api/v1/sync/outbox', [
        'operations' => [
            [
                'type' => 'maintenance_request.create',
                'client_uuid' => $uuid,
                'payload' => [
                    'property_unit_id' => $unit->id,
                    'category' => 'electricite',
                    'description' => 'Prise defectueuse',
                ],
            ],
        ],
    ])->assertOk()
        ->assertJsonPath('results.0.ok', true);

    $this->assertDatabaseHas('maintenance_requests', ['client_uuid' => $uuid]);
});

test('sync delta ne renvoie que les entités modifiées depuis le curseur', function () {
    seedRoles();
    $manager = User::factory()->create();
    $manager->roles()->attach(Role::where('name', 'manager')->first());

    $property = Property::factory()->create(['owner_user_id' => $manager->id]);
    $unit = PropertyUnit::factory()->create(['property_id' => $property->id]);
    $tenant = Tenant::factory()->create();
    Lease::factory()->create([
        'tenant_id' => $tenant->id,
        'property_unit_id' => $unit->id,
        'status' => 'active',
    ]);

    Sanctum::actingAs($manager);

    $since = now()->subMinute()->toIso8601String();

    $this->postJson('/api/v1/maintenance-requests', [
        'property_unit_id' => $unit->id,
        'category' => 'plomberie',
        'description' => 'Robinet qui goutte',
    ])->assertCreated();

    $this->getJson('/api/v1/sync?since='.urlencode($since))
        ->assertOk()
        ->assertJsonCount(1, 'data.maintenance_requests');
});
