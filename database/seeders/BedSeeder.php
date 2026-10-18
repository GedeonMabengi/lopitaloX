<?php

namespace Database\Seeders;

// Dépend de : RoomSeeder
class BedSeeder extends BaseSeeder
{
    public function run(): void
    {
        $roomIds = $this->ids('rooms', 'room_number');

        $beds = [
            ['bed_number' => 'BED-001', 'room_id' => $roomIds['URG-101'], 'status' => 'occupied'],
            ['bed_number' => 'BED-002', 'room_id' => $roomIds['PED-201'], 'status' => 'available'],
            ['bed_number' => 'BED-003', 'room_id' => $roomIds['MAT-301'], 'status' => 'available'],
            ['bed_number' => 'BED-004', 'room_id' => $roomIds['CAR-401'], 'status' => 'available'],
            ['bed_number' => 'BED-005', 'room_id' => $roomIds['LAB-501'], 'status' => 'cleaning'],
            ['bed_number' => 'BED-006', 'room_id' => $roomIds['RAD-601'], 'status' => 'maintenance'],
        ];

        foreach ($beds as $bed) {
            $this->upsertRow('beds', ['bed_number' => $bed['bed_number']], $bed);
        }
    }
}
