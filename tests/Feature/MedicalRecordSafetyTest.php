<?php

use App\Models\AuditLog;
use App\Models\Patient;
use App\Models\User;
use Illuminate\Support\Facades\DB;

test('les antécédents sont chiffrés en base et chaque modification est tracée', function () {
    $user = User::create(['name' => 'Dr Test', 'email' => 'dr@example.com', 'password' => 'secret']);
    $this->actingAs($user);

    $patient = Patient::create([
        'patient_code' => 'PAT-T1',
        'first_name' => 'Test',
        'last_name' => 'Patient',
        'date_of_birth' => '1990-01-01',
        'gender' => 'female',
        'medical_history' => 'asthme',
    ]);

    // Lisible via le modèle, illisible en base
    expect($patient->fresh()->medical_history)->toBe('asthme')
        ->and(DB::table('patients')->value('medical_history'))->not->toContain('asthme');

    $patient->update(['medical_history' => 'asthme, diabète']);

    $log = AuditLog::where('action', 'updated')->sole();
    expect($log->user_id)->toBe($user->id)
        ->and($log->auditable->is($patient))->toBeTrue()
        ->and(array_keys($log->new_values))->toBe(['medical_history'])
        // Le journal ne doit pas exposer la donnée en clair
        ->and(json_encode($log->new_values))->not->toContain('diab');

    expect(AuditLog::where('action', 'created')->count())->toBe(1);
});
