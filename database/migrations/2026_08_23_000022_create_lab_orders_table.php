<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('lab_orders', function (Blueprint $table) {
            $table->id();
            $table->string('order_code')->unique();
            $table->foreignId('patient_id')->constrained()->onDelete('cascade');
            $table->foreignId('admission_id')->nullable()->constrained()->onDelete('cascade');
            $table->foreignId('ordered_by')->nullable()->constrained('staff')->onDelete('set null');
            $table->dateTime('order_date');
            $table->enum('status', ['pending', 'sample_collected', 'in_progress', 'completed', 'cancelled'])->default('pending');
            $table->text('clinical_info')->nullable();
            $table->json('tests');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('lab_orders');
    }
};
