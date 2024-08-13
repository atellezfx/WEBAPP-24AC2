<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('mascotas', function (Blueprint $table) {
            $table->id()->autoIncrement();
            $table->string('nombre',255)->nullable(false);
            $table->foreignId('propietario')->nullable(false)->constrained('propietarios')->cascadeOnUpdate()->restrictOnDelete();
            $table->date('fechaNac')->nullable(false);
            $table->string('raza',255)->nullable(false);
            $table->string('color',255)->nullable(false);
            $table->enum('genero', ['macho','hembra'])->nullable(false);
            $table->foreignId('tipo')->nullable(false)->constrained('tipos')->cascadeOnUpdate()->restrictOnDelete();
            $table->string('fotoUrl',255)->nullable(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mascotas');
    }
};
