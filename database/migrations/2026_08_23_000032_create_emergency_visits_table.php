<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('emergency_visits', function (Blueprint $table) {
            $table->id();
            $table->foreignId('patient_id')->constrained()->restrictOnDelete();
            $table->dateTime('arrival_time');
            $table->string('triage_level')->nullable();
            $table->text('chief_complaint')->nullable();
            $table->string('status')->default('waiting');
            $table->foreignId('attending_staff_id')->nullable()->constrained('staff')->onDelete('set null');
            $table->foreignId('admission_id')->nullable()->constrained()->restrictOnDelete(); // si le patient est hospitalisé
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('emergency_visits');
    }
};
