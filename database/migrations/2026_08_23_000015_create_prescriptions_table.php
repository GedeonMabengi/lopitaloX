<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('prescriptions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('patient_id')->constrained()->onDelete('cascade');
            $table->foreignId('admission_id')->nullable()->constrained()->onDelete('cascade');
            $table->foreignId('prescriber_id')->nullable()->constrained('staff')->onDelete('set null');
            $table->dateTime('prescribed_at');
            $table->enum('status', ['active', 'completed', 'cancelled', 'expired'])->default('active');
            $table->text('notes')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('prescriptions');
    }
};
