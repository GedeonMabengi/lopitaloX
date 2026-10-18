<?php

namespace Database\Seeders;

// Dépend de : UserSeeder, DepartmentSeeder, StaffSeeder, PatientSeeder
class AppointmentSeeder extends BaseSeeder
{
    public function run(): void
    {
        $adminId = $this->adminId();
        $departmentIds = $this->ids('departments', 'code');
        $staffIds = $this->ids('staff', 'staff_code');
        $patientIds = $this->ids('patients', 'patient_code');

        $reasons = ['Consultation urgence', 'Suivi pediatrique', 'Consultation prenatale', 'Controle tension', 'Bilan sanguin', 'Echographie'];
        $departments = ['URG', 'PED', 'MAT', 'CAR', 'LAB', 'RAD'];

        foreach (range(1, 6) as $index) {
            $patientId = $patientIds[sprintf('PAT-%03d', $index)];
            $scheduledAt = "2026-08-2{$index} 09:00:00";

            $this->upsertRow('appointments', ['patient_id' => $patientId, 'scheduled_at' => $scheduledAt], [
                'staff_id' => $staffIds[sprintf('STF-%03d', $index)],
                'department_id' => $departmentIds[$departments[$index - 1]],
                'end_at' => "2026-08-2{$index} 09:30:00",
                'status' => $index <= 2 ? 'confirmed' : 'pending',
                'reason' => $reasons[$index - 1],
                'notes' => null,
                'created_by' => $adminId,
            ]);
        }
    }
}
