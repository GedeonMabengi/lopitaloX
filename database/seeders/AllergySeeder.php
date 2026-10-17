<?php

namespace Database\Seeders;

// Dépend de : PatientSeeder
class AllergySeeder extends BaseSeeder
{
    public function run(): void
    {
        $patientIds = $this->ids('patients', 'patient_code');

        $allergens = ['Penicilline', 'Aucune connue', 'Arachides', 'Iode', 'Aucune connue', 'Lait'];
        $reactions = ['Eruption cutanee', null, 'Urticaire', 'Nausee', null, 'Douleur abdominale'];
        $severities = ['moderate', null, 'moderate', 'mild', null, 'mild'];

        foreach (range(1, 6) as $index) {
            $this->upsertRow('allergies', [
                'patient_id' => $patientIds[sprintf('PAT-%03d', $index)],
                'allergen' => $allergens[$index - 1],
            ], [
                'reaction' => $reactions[$index - 1],
                'severity' => $severities[$index - 1],
                'notes' => null,
            ]);
        }
    }
}
