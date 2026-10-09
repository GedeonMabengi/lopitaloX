<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('dispensing_records', function (Blueprint $table) {
            $table->id();
            $table->foreignId('prescription_item_id')->constrained()->onDelete('cascade');
            $table->foreignId('medication_id')->nullable()->constrained()->onDelete('set null');
            $table->foreignId('dispensed_by')->nullable()->constrained('staff')->onDelete('set null');
            $table->foreignId('administered_by')->nullable()->constrained('staff')->onDelete('set null');
            $table->dateTime('dispensed_at')->nullable();
            $table->dateTime('administered_at')->nullable();
            $table->integer('quantity');
            $table->text('notes')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('dispensing_records');
    }
};
