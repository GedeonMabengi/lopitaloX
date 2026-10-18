<?php

namespace Database\Seeders;

class PatientSeeder extends BaseSeeder
{
    public function run(): void
    {
        $patients = [
            ['patient_code' => 'PAT-001', 'first_name' => 'Grace', 'last_name' => 'Tshibanda', 'date_of_birth' => '1994-02-10', 'gender' => 'female', 'phone' => '+243820000001', 'email' => 'grace.tshibanda@example.com', 'address' => 'Lubumbashi, Golf', 'emergency_contact_name' => 'Marc Tshibanda', 'emergency_contact_phone' => '+243830000001', 'blood_group' => 'O+', 'medical_history' => 'asthme'],
            ['patient_code' => 'PAT-002', 'first_name' => 'Daniel', 'last_name' => 'Mbuyi', 'date_of_birth' => '1988-05-21', 'gender' => 'male', 'phone' => '+243820000002', 'email' => 'daniel.mbuyi@example.com', 'address' => 'Lubumbashi, Kenya', 'emergency_contact_name' => 'Julie Mbuyi', 'emergency_contact_phone' => '+243830000002', 'blood_group' => 'A+', 'medical_history' => 'hypertension'],
            ['patient_code' => 'PAT-003', 'first_name' => 'Nadine', 'last_name' => 'Kasongo', 'date_of_birth' => '2001-12-03', 'gender' => 'female', 'phone' => '+243820000003', 'email' => 'nadine.kasongo@example.com', 'address' => 'Lubumbashi, Katuba', 'emergency_contact_name' => 'Chantal Kasongo', 'emergency_contact_phone' => '+243830000003', 'blood_group' => 'B+', 'medical_history' => null],
            ['patient_code' => 'PAT-004', 'first_name' => 'Cedric', 'last_name' => 'Ngoy', 'date_of_birth' => '1975-08-16', 'gender' => 'male', 'phone' => '+243820000004', 'email' => 'cedric.ngoy@example.com', 'address' => 'Lubumbashi, Ruashi', 'emergency_contact_name' => 'Alice Ngoy', 'emergency_contact_phone' => '+243830000004', 'blood_group' => 'AB+', 'medical_history' => 'diabete type 2'],
            ['patient_code' => 'PAT-005', 'first_name' => 'Esther', 'last_name' => 'Lukusa', 'date_of_birth' => '1999-04-28', 'gender' => 'female', 'phone' => '+243820000005', 'email' => 'esther.lukusa@example.com', 'address' => 'Lubumbashi, Centre-ville', 'emergency_contact_name' => 'Joseph Lukusa', 'emergency_contact_phone' => '+243830000005', 'blood_group' => 'O-', 'medical_history' => 'cesarienne'],
            ['patient_code' => 'PAT-006', 'first_name' => 'Moise', 'last_name' => 'Kitenge', 'date_of_birth' => '2016-10-11', 'gender' => 'male', 'phone' => '+243820000006', 'email' => null, 'address' => 'Lubumbashi, Kampemba', 'emergency_contact_name' => 'Rebecca Kitenge', 'emergency_contact_phone' => '+243830000006', 'blood_group' => 'A-', 'medical_history' => 'paludisme recurrent'],
        ];

        foreach ($patients as $patient) {
            $patient['medical_history'] = $this->encrypt($patient['medical_history']);
            $this->upsertRow('patients', ['patient_code' => $patient['patient_code']], $patient);
        }
    }
}
