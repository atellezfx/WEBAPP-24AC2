<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void {
        Schema::create('propietarios', function (Blueprint $table) {
            $table->id()->autoIncrement();
            $table->string('email',255)->unique(true)->nullable(false);
            $table->string('nombre',255)->nullable(false);
            $table->string('apellidos',255)->nullable(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('propietarios');
    }
};
