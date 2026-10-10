<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('imaging_reports', function (Blueprint $table) {
            $table->id();
            $table->foreignId('imaging_order_id')->constrained()->restrictOnDelete();
            $table->foreignId('radiologist_id')->nullable()->constrained('staff')->onDelete('set null');
            $table->text('findings')->nullable();
            $table->text('impression')->nullable();
            $table->string('report_file_path')->nullable();
            $table->dateTime('report_date')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('imaging_reports');
    }
};
