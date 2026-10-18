<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('medication_batches', function (Blueprint $table) {
            $table->id();
            $table->foreignId('medication_id')->constrained()->restrictOnDelete();
            $table->string('batch_number');
            $table->date('expiry_date');
            $table->unsignedInteger('quantity')->default(0);
            $table->timestamps();
            $table->unique(['medication_id', 'batch_number']);
            $table->index(['medication_id', 'expiry_date']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('medication_batches');
    }
};
