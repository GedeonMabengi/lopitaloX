<?php

namespace Database\Seeders;

// Dépend de : DepartmentSeeder
class RoomSeeder extends BaseSeeder
{
    public function run(): void
    {
        $departmentIds = $this->ids('departments', 'code');

        $rooms = [
            ['room_number' => 'URG-101', 'type' => 'observation', 'department_id' => $departmentIds['URG']],
            ['room_number' => 'PED-201', 'type' => 'standard', 'department_id' => $departmentIds['PED']],
            ['room_number' => 'MAT-301', 'type' => 'maternite', 'department_id' => $departmentIds['MAT']],
            ['room_number' => 'CAR-401', 'type' => 'standard', 'department_id' => $departmentIds['CAR']],
            ['room_number' => 'LAB-501', 'type' => 'prelevement', 'department_id' => $departmentIds['LAB']],
            ['room_number' => 'RAD-601', 'type' => 'imagerie', 'department_id' => $departmentIds['RAD']],
        ];

        foreach ($rooms as $room) {
            $this->upsertRow('rooms', ['room_number' => $room['room_number']], $room);
        }
    }
}
