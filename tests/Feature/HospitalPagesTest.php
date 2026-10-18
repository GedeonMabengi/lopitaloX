<?php

use App\Models\Patient;
use App\Models\Prescription;
use App\Models\Role;
use App\Models\User;
use Database\Seeders\DatabaseSeeder;
use Database\Seeders\UserSeeder;
use Inertia\Testing\AssertableInertia as Assert;

beforeEach(function () {
    $this->seed(DatabaseSeeder::class);
    $this->admin = User::where('email', UserSeeder::ADMIN_EMAIL)->firstOrFail();
});

test('chaque page de l\'application rend son composant React', function (string $url, string $component) {
    Prescription::create(['patient_id' => 1, 'prescribed_at' => now(), 'status' => 'active']);

    $this->actingAs($this->admin)
        ->get($url)
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page->component($component));
})->with([
    'accueil' => ['/', 'welcome'],
    'tableau de bord' => ['/dashboard', 'dashboard'],
    'patients' => ['/patients', 'patients/index'],
    'nouveau patient' => ['/patients/create', 'patients/create'],
    'fiche patient' => ['/patients/1', 'patients/show'],
    'modifier patient' => ['/patients/1/edit', 'patients/edit'],
    'rendez-vous' => ['/appointments', 'appointments/index'],
    'nouveau rendez-vous' => ['/appointments/create?patient_id=1', 'appointments/create'],
    'factures' => ['/invoices', 'invoices/index'],
    'prescriptions' => ['/prescriptions', 'prescriptions/index'],
    'prescription' => ['/prescriptions/1', 'prescriptions/show'],
    'dossiers médicaux' => ['/patients/1/medical-records', 'medical-records/index'],
    'nouvelle note' => ['/medical-records/create/1', 'medical-records/create'],
]);

test('la liste des patients est paginée et filtrable', function () {
    $this->actingAs($this->admin)
        ->get('/patients?search=Tshibanda')
        ->assertInertia(fn (Assert $page) => $page
            ->where('filters.search', 'Tshibanda')
            ->has('patients.data', 1)
            ->where('patients.data.0.fullName', 'Grace Tshibanda'));
});

test('la fiche patient n\'expose pas les antécédents chiffrés', function () {
    $this->actingAs($this->admin)
        ->get('/patients/1')
        ->assertInertia(fn (Assert $page) => $page->missing('patient.medical_history'));
});

test('créer un patient redirige vers la liste avec une notification', function () {
    $this->actingAs($this->admin)
        ->post('/patients', [
            'first_name' => 'Jean',
            'last_name' => 'Test',
            'date_of_birth' => '1990-01-01',
            'gender' => 'male',
            'medical_history' => 'Aucun',
        ])
        ->assertRedirect('/patients')
        ->assertInertiaFlash('toast.message', 'Patient créé avec succès.');

    expect(Patient::where('last_name', 'Test')->first()->medical_history)->toBe('Aucun');
});

test('un patient connecté accède à son portail', function () {
    $user = User::create(['name' => 'Grace', 'email' => 'grace@example.com', 'password' => 'secret']);
    $user->roles()->attach(Role::where('name', 'patient')->firstOrFail());
    Patient::find(1)->update(['user_id' => $user->id]);

    $this->actingAs($user)
        ->get('/portal')
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->component('portal/dashboard')
            ->where('patient.fullName', 'Grace Tshibanda'));

    $this->actingAs($user)->get('/portal/appointments')->assertInertia(fn (Assert $page) => $page->component('portal/appointments'));
});
