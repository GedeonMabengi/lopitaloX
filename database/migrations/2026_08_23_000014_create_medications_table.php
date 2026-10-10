<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('medications', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('generic_name')->nullable();
            $table->string('form')->nullable();
            $table->string('strength')->nullable();
            $table->string('unit')->nullable();
            $table->decimal('price', 10, 2)->default(0);
            $table->integer('reorder_level')->default(10); // stock et péremption : voir medication_batches
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('medications');
    }
};
