<?php

namespace Database\Seeders;

// Dépend de : StaffSeeder, PatientSeeder
class VitalSignSeeder extends BaseSeeder
{
    public function run(): void
    {
        $staffIds = $this->ids('staff', 'staff_code');
        $patientIds = $this->ids('patients', 'patient_code');

        $temperatures = [37.8, 38.2, 36.9, 37.1, 36.7, 38.0];
        $heartRates = [88, 102, 79, 84, 76, 98];
        $respiratoryRates = [18, 24, 17, 18, 16, 22];
        $systolic = [120, 105, 112, 145, 118, 100];
        $diastolic = [80, 70, 72, 95, 78, 65];
        $oxygen = [98, 97, 99, 96, 99, 95];
        $weights = [68.5, 24.2, 61.0, 82.7, 70.3, 31.4];
        $heights = [168, 122, 164, 175, 160, 136];

        foreach (range(1, 6) as $index) {
            $i = $index - 1;

            $this->upsertRow('vital_signs', [
                'patient_id' => $patientIds[sprintf('PAT-%03d', $index)],
                'measured_at' => "2026-08-2{$index} 08:45:00",
            ], [
                'admission_id' => null,
                'staff_id' => $staffIds[sprintf('STF-%03d', $index)],
                'temperature' => $temperatures[$i],
                'heart_rate' => $heartRates[$i],
                'respiratory_rate' => $respiratoryRates[$i],
                'blood_pressure_systolic' => $systolic[$i],
                'blood_pressure_diastolic' => $diastolic[$i],
                'oxygen_saturation' => $oxygen[$i],
                'weight' => $weights[$i],
                'height' => $heights[$i],
                'notes' => null,
            ]);
        }
    }
}
