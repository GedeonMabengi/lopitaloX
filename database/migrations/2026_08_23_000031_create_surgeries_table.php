<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('surgeries', function (Blueprint $table) {
            $table->id();
            $table->foreignId('patient_id')->constrained()->restrictOnDelete();
            $table->foreignId('admission_id')->nullable()->constrained()->onDelete('set null');
            $table->foreignId('surgeon_id')->nullable()->constrained('staff')->onDelete('set null');
            $table->dateTime('scheduled_at');
            $table->dateTime('end_at')->nullable();
            $table->string('surgery_type');
            $table->string('status')->default('scheduled');
            $table->foreignId('operating_room_id')->nullable()->constrained()->onDelete('set null');
            $table->text('notes')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('surgeries');
    }
};
