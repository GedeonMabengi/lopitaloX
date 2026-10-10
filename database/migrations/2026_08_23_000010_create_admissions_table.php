<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('admissions', function (Blueprint $table) {
            $table->id();
            $table->string('admission_code')->unique();
            $table->foreignId('patient_id')->constrained()->restrictOnDelete();
            $table->foreignId('department_id')->nullable()->constrained()->onDelete('set null');
            $table->foreignId('bed_id')->nullable()->constrained()->onDelete('set null');
            $table->foreignId('attending_doctor_id')->nullable()->constrained('staff')->onDelete('set null');
            $table->dateTime('admission_date');
            $table->dateTime('discharge_date')->nullable();
            $table->string('status')->default('planned');
            $table->text('diagnosis')->nullable(); // chiffré (cast encrypted)
            $table->text('notes')->nullable();
            $table->timestamps();
            $table->softDeletes();
            $table->index('status'); // hospitalisations en cours
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('admissions');
    }
};
