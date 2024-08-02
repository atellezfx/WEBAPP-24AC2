<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Tipo;

class TipoSeeder extends Seeder {

    public function run(): void {
        Tipo::factory()->create([ 'id' => 1, 'descripcion' => 'perro', ]);
        Tipo::factory()->create([ 'id' => 2, 'descripcion' => 'gato', ]);
    }
}
