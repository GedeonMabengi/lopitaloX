<?php

namespace Database\Seeders;

// Dépend de : DepartmentSeeder
class StaffSeeder extends BaseSeeder
{
    public function run(): void
    {
        $departmentIds = $this->ids('departments', 'code');

        $staff = [
            ['staff_code' => 'STF-001', 'first_name' => 'Aline', 'last_name' => 'Kabongo', 'email' => 'aline.kabongo@example.com', 'phone' => '+243810000001', 'gender' => 'female', 'date_of_birth' => '1985-03-12', 'specialty' => 'Urgentiste', 'license_number' => 'MED-1001', 'department_id' => $departmentIds['URG']],
            ['staff_code' => 'STF-002', 'first_name' => 'Jean', 'last_name' => 'Mwansa', 'email' => 'jean.mwansa@example.com', 'phone' => '+243810000002', 'gender' => 'male', 'date_of_birth' => '1979-07-22', 'specialty' => 'Pediatre', 'license_number' => 'MED-1002', 'department_id' => $departmentIds['PED']],
            ['staff_code' => 'STF-003', 'first_name' => 'Sarah', 'last_name' => 'Ilunga', 'email' => 'sarah.ilunga@example.com', 'phone' => '+243810000003', 'gender' => 'female', 'date_of_birth' => '1990-01-05', 'specialty' => 'Sage-femme', 'license_number' => 'NRS-1003', 'department_id' => $departmentIds['MAT']],
            ['staff_code' => 'STF-004', 'first_name' => 'David', 'last_name' => 'Kanza', 'email' => 'david.kanza@example.com', 'phone' => '+243810000004', 'gender' => 'male', 'date_of_birth' => '1982-11-18', 'specialty' => 'Cardiologue', 'license_number' => 'MED-1004', 'department_id' => $departmentIds['CAR']],
            ['staff_code' => 'STF-005', 'first_name' => 'Merveille', 'last_name' => 'Mutombo', 'email' => 'merveille.mutombo@example.com', 'phone' => '+243810000005', 'gender' => 'female', 'date_of_birth' => '1993-06-30', 'specialty' => 'Technicien labo', 'license_number' => 'LAB-1005', 'department_id' => $departmentIds['LAB']],
            ['staff_code' => 'STF-006', 'first_name' => 'Patrick', 'last_name' => 'Kalala', 'email' => 'patrick.kalala@example.com', 'phone' => '+243810000006', 'gender' => 'male', 'date_of_birth' => '1988-09-14', 'specialty' => 'Radiologue', 'license_number' => 'RAD-1006', 'department_id' => $departmentIds['RAD']],
        ];

        foreach ($staff as $member) {
            $this->upsertRow('staff', ['staff_code' => $member['staff_code']], $member);
        }
    }
}
