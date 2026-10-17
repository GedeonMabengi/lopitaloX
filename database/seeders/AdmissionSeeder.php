<?php

namespace Database\Seeders;

// Dépend de : DepartmentSeeder, StaffSeeder, PatientSeeder, BedSeeder
class AdmissionSeeder extends BaseSeeder
{
    public function run(): void
    {
        $departmentIds = $this->ids('departments', 'code');
        $staffIds = $this->ids('staff', 'staff_code');
        $patientIds = $this->ids('patients', 'patient_code');
        $bedIds = $this->ids('beds', 'bed_number');

        $diagnoses = ['Observation', 'Fievre', 'Suivi grossesse', 'Hypertension', 'Bilan biologique', 'Controle imagerie'];
        $departments = ['URG', 'PED', 'MAT', 'CAR', 'LAB', 'RAD'];

        foreach (range(1, 6) as $index) {
            $this->upsertRow('admissions', ['admission_code' => sprintf('ADM-%03d', $index)], [
                'patient_id' => $patientIds[sprintf('PAT-%03d', $index)],
                'department_id' => $departmentIds[$departments[$index - 1]],
                'bed_id' => $bedIds[sprintf('BED-%03d', $index)],
                'attending_doctor_id' => $staffIds[sprintf('STF-%03d', $index)],
                'admission_date' => "2026-08-2{$index} 10:00:00",
                'discharge_date' => null,
                'status' => $index === 1 ? 'active' : 'planned',
                'diagnosis' => $this->encrypt($diagnoses[$index - 1]),
                'notes' => null,
            ]);
        }
    }
}
