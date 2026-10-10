<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $now = now();

        DB::table('users')->updateOrInsert(
            ['email' => 'admin@example.com'],
            [
                'name' => 'Admin',
                'password' => Hash::make('password'),
                'email_verified_at' => $now,
                'created_at' => $now,
                'updated_at' => $now,
            ],
        );

        $adminId = DB::table('users')->where('email', 'admin@example.com')->value('id');

        foreach ($this->roles() as $name => $description) {
            DB::table('roles')->updateOrInsert(
                ['name' => $name],
                $this->withTimestamps(['description' => $description], $now),
            );
        }

        DB::table('role_user')->updateOrInsert(
            [
                'user_id' => $adminId,
                'role_id' => DB::table('roles')->where('name', 'admin')->value('id'),
            ],
            ['created_at' => $now, 'updated_at' => $now],
        );

        foreach ($this->departments() as $department) {
            DB::table('departments')->updateOrInsert(
                ['code' => $department['code']],
                $this->withTimestamps($department, $now),
            );
        }

        $departmentIds = DB::table('departments')->pluck('id', 'code');

        foreach ($this->staff($departmentIds) as $member) {
            DB::table('staff')->updateOrInsert(
                ['staff_code' => $member['staff_code']],
                $this->withTimestamps($member, $now),
            );
        }

        foreach ($this->patients() as $patient) {
            $patient['medical_history'] = $this->encrypt($patient['medical_history']);
            DB::table('patients')->updateOrInsert(
                ['patient_code' => $patient['patient_code']],
                $this->withTimestamps($patient, $now),
            );
        }

        foreach ($this->rooms($departmentIds) as $room) {
            DB::table('rooms')->updateOrInsert(
                ['room_number' => $room['room_number']],
                $this->withTimestamps($room, $now),
            );
        }

        $roomIds = DB::table('rooms')->pluck('id', 'room_number');

        foreach ($this->beds($roomIds) as $bed) {
            DB::table('beds')->updateOrInsert(
                ['bed_number' => $bed['bed_number']],
                $this->withTimestamps($bed, $now),
            );
        }

        foreach ($this->medications() as $medication) {
            DB::table('medications')->updateOrInsert(
                ['name' => $medication['name']],
                $this->withTimestamps($medication, $now),
            );
        }

        foreach ($this->suppliers() as $supplier) {
            DB::table('suppliers')->updateOrInsert(
                ['name' => $supplier['name']],
                $this->withTimestamps($supplier, $now),
            );
        }

        $staffIds = DB::table('staff')->pluck('id', 'staff_code');
        $patientIds = DB::table('patients')->pluck('id', 'patient_code');
        $bedIds = DB::table('beds')->pluck('id', 'bed_number');
        $supplierIds = DB::table('suppliers')->pluck('id', 'name');
        $medicationIds = DB::table('medications')->pluck('id', 'name');

        // Stock initial : un lot par médicament + le mouvement d'entrée correspondant
        foreach ($this->medicationBatches($medicationIds) as $batch) {
            DB::table('medication_batches')->updateOrInsert(
                ['medication_id' => $batch['medication_id'], 'batch_number' => $batch['batch_number']],
                $this->withTimestamps($batch, $now),
            );

            $batchId = DB::table('medication_batches')
                ->where('medication_id', $batch['medication_id'])
                ->where('batch_number', $batch['batch_number'])
                ->value('id');

            DB::table('stock_transactions')->updateOrInsert(
                ['medication_batch_id' => $batchId, 'type' => 'purchase'],
                $this->withTimestamps([
                    'medication_id' => $batch['medication_id'],
                    'quantity' => $batch['quantity'],
                    'performed_by' => $adminId,
                    'notes' => 'Stock initial',
                ], $now),
            );
        }

        foreach ($this->appointments($departmentIds, $staffIds, $patientIds, $adminId) as $appointment) {
            DB::table('appointments')->updateOrInsert(
                [
                    'patient_id' => $appointment['patient_id'],
                    'scheduled_at' => $appointment['scheduled_at'],
                ],
                $this->withTimestamps($appointment, $now),
            );
        }

        foreach ($this->admissions($departmentIds, $staffIds, $patientIds, $bedIds) as $admission) {
            $admission['diagnosis'] = $this->encrypt($admission['diagnosis']);
            DB::table('admissions')->updateOrInsert(
                ['admission_code' => $admission['admission_code']],
                $this->withTimestamps($admission, $now),
            );
        }

        foreach ($this->allergies($patientIds) as $allergy) {
            DB::table('allergies')->updateOrInsert(
                [
                    'patient_id' => $allergy['patient_id'],
                    'allergen' => $allergy['allergen'],
                ],
                $this->withTimestamps($allergy, $now),
            );
        }

        foreach ($this->vitalSigns($staffIds, $patientIds) as $vitalSign) {
            DB::table('vital_signs')->updateOrInsert(
                [
                    'patient_id' => $vitalSign['patient_id'],
                    'measured_at' => $vitalSign['measured_at'],
                ],
                $this->withTimestamps($vitalSign, $now),
            );
        }

        foreach ($this->purchaseOrders($supplierIds, $adminId) as $purchaseOrder) {
            DB::table('purchase_orders')->updateOrInsert(
                ['order_code' => $purchaseOrder['order_code']],
                $this->withTimestamps($purchaseOrder, $now),
            );
        }

        $purchaseOrderIds = DB::table('purchase_orders')->pluck('id', 'order_code');

        foreach ($this->purchaseOrderItems($purchaseOrderIds, $medicationIds) as $item) {
            DB::table('purchase_order_items')->updateOrInsert(
                [
                    'purchase_order_id' => $item['purchase_order_id'],
                    'medication_id' => $item['medication_id'],
                ],
                $this->withTimestamps($item, $now),
            );
        }
    }

    private function roles(): array
    {
        return [
            'admin' => 'Administrateur systeme',
            'doctor' => 'Medecin',
            'nurse' => 'Infirmier',
            'receptionist' => 'Reception',
            'pharmacist' => 'Pharmacien',
            'lab_tech' => 'Technicien de laboratoire',
            'accountant' => 'Comptable',
            'director' => 'Directeur',
        ];
    }

    private function departments(): array
    {
        return [
            ['code' => 'URG', 'name' => 'Urgences', 'description' => 'Prise en charge rapide des urgences'],
            ['code' => 'PED', 'name' => 'Pediatrie', 'description' => 'Soins des enfants'],
            ['code' => 'MAT', 'name' => 'Maternite', 'description' => 'Suivi grossesse et accouchement'],
            ['code' => 'CAR', 'name' => 'Cardiologie', 'description' => 'Diagnostic et suivi cardiovasculaire'],
            ['code' => 'LAB', 'name' => 'Laboratoire', 'description' => 'Analyses biologiques'],
            ['code' => 'RAD', 'name' => 'Imagerie', 'description' => 'Radiologie et echographie'],
        ];
    }

    private function staff($departmentIds): array
    {
        return [
            ['staff_code' => 'STF-001', 'first_name' => 'Aline', 'last_name' => 'Kabongo', 'email' => 'aline.kabongo@example.com', 'phone' => '+243810000001', 'gender' => 'female', 'date_of_birth' => '1985-03-12', 'specialty' => 'Urgentiste', 'license_number' => 'MED-1001', 'department_id' => $departmentIds['URG']],
            ['staff_code' => 'STF-002', 'first_name' => 'Jean', 'last_name' => 'Mwansa', 'email' => 'jean.mwansa@example.com', 'phone' => '+243810000002', 'gender' => 'male', 'date_of_birth' => '1979-07-22', 'specialty' => 'Pediatre', 'license_number' => 'MED-1002', 'department_id' => $departmentIds['PED']],
            ['staff_code' => 'STF-003', 'first_name' => 'Sarah', 'last_name' => 'Ilunga', 'email' => 'sarah.ilunga@example.com', 'phone' => '+243810000003', 'gender' => 'female', 'date_of_birth' => '1990-01-05', 'specialty' => 'Sage-femme', 'license_number' => 'NRS-1003', 'department_id' => $departmentIds['MAT']],
            ['staff_code' => 'STF-004', 'first_name' => 'David', 'last_name' => 'Kanza', 'email' => 'david.kanza@example.com', 'phone' => '+243810000004', 'gender' => 'male', 'date_of_birth' => '1982-11-18', 'specialty' => 'Cardiologue', 'license_number' => 'MED-1004', 'department_id' => $departmentIds['CAR']],
            ['staff_code' => 'STF-005', 'first_name' => 'Merveille', 'last_name' => 'Mutombo', 'email' => 'merveille.mutombo@example.com', 'phone' => '+243810000005', 'gender' => 'female', 'date_of_birth' => '1993-06-30', 'specialty' => 'Technicien labo', 'license_number' => 'LAB-1005', 'department_id' => $departmentIds['LAB']],
            ['staff_code' => 'STF-006', 'first_name' => 'Patrick', 'last_name' => 'Kalala', 'email' => 'patrick.kalala@example.com', 'phone' => '+243810000006', 'gender' => 'male', 'date_of_birth' => '1988-09-14', 'specialty' => 'Radiologue', 'license_number' => 'RAD-1006', 'department_id' => $departmentIds['RAD']],
        ];
    }

    private function patients(): array
    {
        return [
            ['patient_code' => 'PAT-001', 'first_name' => 'Grace', 'last_name' => 'Tshibanda', 'date_of_birth' => '1994-02-10', 'gender' => 'female', 'phone' => '+243820000001', 'email' => 'grace.tshibanda@example.com', 'address' => 'Lubumbashi, Golf', 'emergency_contact_name' => 'Marc Tshibanda', 'emergency_contact_phone' => '+243830000001', 'blood_group' => 'O+', 'medical_history' => 'asthme'],
            ['patient_code' => 'PAT-002', 'first_name' => 'Daniel', 'last_name' => 'Mbuyi', 'date_of_birth' => '1988-05-21', 'gender' => 'male', 'phone' => '+243820000002', 'email' => 'daniel.mbuyi@example.com', 'address' => 'Lubumbashi, Kenya', 'emergency_contact_name' => 'Julie Mbuyi', 'emergency_contact_phone' => '+243830000002', 'blood_group' => 'A+', 'medical_history' => 'hypertension'],
            ['patient_code' => 'PAT-003', 'first_name' => 'Nadine', 'last_name' => 'Kasongo', 'date_of_birth' => '2001-12-03', 'gender' => 'female', 'phone' => '+243820000003', 'email' => 'nadine.kasongo@example.com', 'address' => 'Lubumbashi, Katuba', 'emergency_contact_name' => 'Chantal Kasongo', 'emergency_contact_phone' => '+243830000003', 'blood_group' => 'B+', 'medical_history' => null],
            ['patient_code' => 'PAT-004', 'first_name' => 'Cedric', 'last_name' => 'Ngoy', 'date_of_birth' => '1975-08-16', 'gender' => 'male', 'phone' => '+243820000004', 'email' => 'cedric.ngoy@example.com', 'address' => 'Lubumbashi, Ruashi', 'emergency_contact_name' => 'Alice Ngoy', 'emergency_contact_phone' => '+243830000004', 'blood_group' => 'AB+', 'medical_history' => 'diabete type 2'],
            ['patient_code' => 'PAT-005', 'first_name' => 'Esther', 'last_name' => 'Lukusa', 'date_of_birth' => '1999-04-28', 'gender' => 'female', 'phone' => '+243820000005', 'email' => 'esther.lukusa@example.com', 'address' => 'Lubumbashi, Centre-ville', 'emergency_contact_name' => 'Joseph Lukusa', 'emergency_contact_phone' => '+243830000005', 'blood_group' => 'O-', 'medical_history' => 'cesarienne'],
            ['patient_code' => 'PAT-006', 'first_name' => 'Moise', 'last_name' => 'Kitenge', 'date_of_birth' => '2016-10-11', 'gender' => 'male', 'phone' => '+243820000006', 'email' => null, 'address' => 'Lubumbashi, Kampemba', 'emergency_contact_name' => 'Rebecca Kitenge', 'emergency_contact_phone' => '+243830000006', 'blood_group' => 'A-', 'medical_history' => 'paludisme recurrent'],
        ];
    }

    private function rooms($departmentIds): array
    {
        return [
            ['room_number' => 'URG-101', 'type' => 'observation', 'department_id' => $departmentIds['URG']],
            ['room_number' => 'PED-201', 'type' => 'standard', 'department_id' => $departmentIds['PED']],
            ['room_number' => 'MAT-301', 'type' => 'maternite', 'department_id' => $departmentIds['MAT']],
            ['room_number' => 'CAR-401', 'type' => 'standard', 'department_id' => $departmentIds['CAR']],
            ['room_number' => 'LAB-501', 'type' => 'prelevement', 'department_id' => $departmentIds['LAB']],
            ['room_number' => 'RAD-601', 'type' => 'imagerie', 'department_id' => $departmentIds['RAD']],
        ];
    }

    private function beds($roomIds): array
    {
        return [
            ['bed_number' => 'BED-001', 'room_id' => $roomIds['URG-101'], 'status' => 'occupied'],
            ['bed_number' => 'BED-002', 'room_id' => $roomIds['PED-201'], 'status' => 'available'],
            ['bed_number' => 'BED-003', 'room_id' => $roomIds['MAT-301'], 'status' => 'available'],
            ['bed_number' => 'BED-004', 'room_id' => $roomIds['CAR-401'], 'status' => 'available'],
            ['bed_number' => 'BED-005', 'room_id' => $roomIds['LAB-501'], 'status' => 'cleaning'],
            ['bed_number' => 'BED-006', 'room_id' => $roomIds['RAD-601'], 'status' => 'maintenance'],
        ];
    }

    private function medications(): array
    {
        return [
            ['name' => 'Paracetamol', 'generic_name' => 'Acetaminophene', 'form' => 'comprime', 'strength' => '500mg', 'unit' => 'boite', 'price' => 2.50, 'reorder_level' => 30],
            ['name' => 'Amoxicilline', 'generic_name' => 'Amoxicilline', 'form' => 'capsule', 'strength' => '500mg', 'unit' => 'boite', 'price' => 5.00, 'reorder_level' => 25],
            ['name' => 'Ceftriaxone', 'generic_name' => 'Ceftriaxone', 'form' => 'injection', 'strength' => '1g', 'unit' => 'flacon', 'price' => 8.75, 'reorder_level' => 20],
            ['name' => 'Ibuprofene', 'generic_name' => 'Ibuprofene', 'form' => 'comprime', 'strength' => '400mg', 'unit' => 'boite', 'price' => 3.25, 'reorder_level' => 25],
            ['name' => 'Metformine', 'generic_name' => 'Metformine', 'form' => 'comprime', 'strength' => '850mg', 'unit' => 'boite', 'price' => 4.80, 'reorder_level' => 20],
            ['name' => 'Salbutamol', 'generic_name' => 'Salbutamol', 'form' => 'inhalateur', 'strength' => '100mcg', 'unit' => 'piece', 'price' => 9.50, 'reorder_level' => 10],
        ];
    }

    private function medicationBatches($medicationIds): array
    {
        $batches = [
            'Paracetamol' => [250, '2027-12-31'],
            'Amoxicilline' => [120, '2027-09-30'],
            'Ceftriaxone' => [80, '2027-06-30'],
            'Ibuprofene' => [160, '2028-01-31'],
            'Metformine' => [90, '2027-11-30'],
            'Salbutamol' => [45, '2027-08-31'],
        ];

        $rows = [];
        foreach ($batches as $name => [$quantity, $expiryDate]) {
            $rows[] = [
                'medication_id' => $medicationIds[$name],
                'batch_number' => 'LOT-' . strtoupper(substr($name, 0, 4)) . '-001',
                'expiry_date' => $expiryDate,
                'quantity' => $quantity,
            ];
        }

        return $rows;
    }

    private function suppliers(): array
    {
        return [
            ['name' => 'Pharma Plus', 'contact_person' => 'Eric Banza', 'phone' => '+243840000001', 'email' => 'contact@pharmaplus.example', 'address' => 'Lubumbashi'],
            ['name' => 'MediStock Congo', 'contact_person' => 'Linda Kabeya', 'phone' => '+243840000002', 'email' => 'vente@medistock.example', 'address' => 'Kinshasa'],
            ['name' => 'Sante Distribution', 'contact_person' => 'Oscar Kalonji', 'phone' => '+243840000003', 'email' => 'info@santedistribution.example', 'address' => 'Lubumbashi'],
            ['name' => 'BioLab Supply', 'contact_person' => 'Marie Tshiala', 'phone' => '+243840000004', 'email' => 'orders@biolab.example', 'address' => 'Goma'],
            ['name' => 'Clinique Equipement', 'contact_person' => 'Paul Ilunga', 'phone' => '+243840000005', 'email' => 'support@cliniqueequip.example', 'address' => 'Likasi'],
            ['name' => 'Radiomed', 'contact_person' => 'Ange Musasa', 'phone' => '+243840000006', 'email' => 'sales@radiomed.example', 'address' => 'Lubumbashi'],
        ];
    }

    private function appointments($departmentIds, $staffIds, $patientIds, int $adminId): array
    {
        $reasons = ['Consultation urgence', 'Suivi pediatrique', 'Consultation prenatale', 'Controle tension', 'Bilan sanguin', 'Echographie'];
        $departments = ['URG', 'PED', 'MAT', 'CAR', 'LAB', 'RAD'];

        return array_map(function (int $index) use ($departmentIds, $staffIds, $patientIds, $adminId, $reasons, $departments): array {
            return [
                'patient_id' => $patientIds[sprintf('PAT-%03d', $index)],
                'staff_id' => $staffIds[sprintf('STF-%03d', $index)],
                'department_id' => $departmentIds[$departments[$index - 1]],
                'scheduled_at' => "2026-08-2{$index} 09:00:00",
                'end_at' => "2026-08-2{$index} 09:30:00",
                'status' => $index <= 2 ? 'confirmed' : 'pending',
                'reason' => $reasons[$index - 1],
                'notes' => null,
                'created_by' => $adminId,
            ];
        }, range(1, 6));
    }

    private function admissions($departmentIds, $staffIds, $patientIds, $bedIds): array
    {
        $diagnoses = ['Observation', 'Fievre', 'Suivi grossesse', 'Hypertension', 'Bilan biologique', 'Controle imagerie'];
        $departments = ['URG', 'PED', 'MAT', 'CAR', 'LAB', 'RAD'];

        return array_map(function (int $index) use ($departmentIds, $staffIds, $patientIds, $bedIds, $diagnoses, $departments): array {
            return [
                'admission_code' => sprintf('ADM-%03d', $index),
                'patient_id' => $patientIds[sprintf('PAT-%03d', $index)],
                'department_id' => $departmentIds[$departments[$index - 1]],
                'bed_id' => $bedIds[sprintf('BED-%03d', $index)],
                'attending_doctor_id' => $staffIds[sprintf('STF-%03d', $index)],
                'admission_date' => "2026-08-2{$index} 10:00:00",
                'discharge_date' => null,
                'status' => $index === 1 ? 'active' : 'planned',
                'diagnosis' => $diagnoses[$index - 1],
                'notes' => null,
            ];
        }, range(1, 6));
    }

    private function allergies($patientIds): array
    {
        $allergens = ['Penicilline', 'Aucune connue', 'Arachides', 'Iode', 'Aucune connue', 'Lait'];
        $reactions = ['Eruption cutanee', null, 'Urticaire', 'Nausee', null, 'Douleur abdominale'];
        $severities = ['moderate', null, 'moderate', 'mild', null, 'mild'];

        return array_map(function (int $index) use ($patientIds, $allergens, $reactions, $severities): array {
            return [
                'patient_id' => $patientIds[sprintf('PAT-%03d', $index)],
                'allergen' => $allergens[$index - 1],
                'reaction' => $reactions[$index - 1],
                'severity' => $severities[$index - 1],
                'notes' => null,
            ];
        }, range(1, 6));
    }

    private function vitalSigns($staffIds, $patientIds): array
    {
        $temperatures = [37.8, 38.2, 36.9, 37.1, 36.7, 38.0];
        $heartRates = [88, 102, 79, 84, 76, 98];
        $respiratoryRates = [18, 24, 17, 18, 16, 22];
        $systolic = [120, 105, 112, 145, 118, 100];
        $diastolic = [80, 70, 72, 95, 78, 65];
        $oxygen = [98, 97, 99, 96, 99, 95];
        $weights = [68.5, 24.2, 61.0, 82.7, 70.3, 31.4];
        $heights = [168, 122, 164, 175, 160, 136];

        return array_map(function (int $index) use ($staffIds, $patientIds, $temperatures, $heartRates, $respiratoryRates, $systolic, $diastolic, $oxygen, $weights, $heights): array {
            return [
                'patient_id' => $patientIds[sprintf('PAT-%03d', $index)],
                'admission_id' => null,
                'staff_id' => $staffIds[sprintf('STF-%03d', $index)],
                'measured_at' => "2026-08-2{$index} 08:45:00",
                'temperature' => $temperatures[$index - 1],
                'heart_rate' => $heartRates[$index - 1],
                'respiratory_rate' => $respiratoryRates[$index - 1],
                'blood_pressure_systolic' => $systolic[$index - 1],
                'blood_pressure_diastolic' => $diastolic[$index - 1],
                'oxygen_saturation' => $oxygen[$index - 1],
                'weight' => $weights[$index - 1],
                'height' => $heights[$index - 1],
                'notes' => null,
            ];
        }, range(1, 6));
    }

    private function purchaseOrders($supplierIds, int $adminId): array
    {
        $suppliers = ['Pharma Plus', 'MediStock Congo', 'Sante Distribution', 'BioLab Supply', 'Clinique Equipement', 'Radiomed'];
        $totals = [250, 500, 700, 325, 480, 950];

        return array_map(function (int $index) use ($supplierIds, $adminId, $suppliers, $totals): array {
            return [
                'order_code' => sprintf('PO-%03d', $index),
                'supplier_id' => $supplierIds[$suppliers[$index - 1]],
                'order_date' => "2026-08-1{$index} 11:00:00",
                'expected_delivery_date' => "2026-08-2{$index} 11:00:00",
                'status' => $index <= 3 ? 'ordered' : 'draft',
                'total_amount' => $totals[$index - 1],
                'created_by' => $adminId,
            ];
        }, range(1, 6));
    }

    private function purchaseOrderItems($purchaseOrderIds, $medicationIds): array
    {
        $medications = ['Paracetamol', 'Amoxicilline', 'Ceftriaxone', 'Ibuprofene', 'Metformine', 'Salbutamol'];
        $quantities = [100, 100, 80, 100, 100, 100];
        $unitPrices = [2.50, 5.00, 8.75, 3.25, 4.80, 9.50];

        return array_map(function (int $index) use ($purchaseOrderIds, $medicationIds, $medications, $quantities, $unitPrices): array {
            return [
                'purchase_order_id' => $purchaseOrderIds[sprintf('PO-%03d', $index)],
                'medication_id' => $medicationIds[$medications[$index - 1]],
                'quantity' => $quantities[$index - 1],
                'unit_price' => $unitPrices[$index - 1],
            ];
        }, range(1, 6));
    }

    // DB::table contourne le cast `encrypted` des modèles : on chiffre comme lui
    private function encrypt(?string $value): ?string
    {
        return $value === null ? null : Crypt::encryptString($value);
    }

    private function withTimestamps(array $values, mixed $now): array
    {
        return array_merge($values, [
            'created_at' => $now,
            'updated_at' => $now,
        ]);
    }
}
