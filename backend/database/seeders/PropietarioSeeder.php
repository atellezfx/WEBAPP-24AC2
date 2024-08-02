<?php

namespace Database\Seeders;

use App\Models\Propietario;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PropietarioSeeder extends Seeder {

    public function run(): void {
        $this->create( 1, 'atellez@correo.com', 'Alejandro', 'Tellez' );
        $this->create( 2, 'jromo@correo.com', 'Jose', 'Romo' );
        $this->create( 3, 'cmendiola@correo.com', 'Carlos', 'Mendiola' );
        $this->create( 4, 'sgonzalez@correo.com', 'Susana', 'Gonzalez' );
        $this->create( 5, 'jacevedo@correo.com', 'Jaime', 'Acevedo' );
    }

    private function create(int $id, string $email, string $nombre, string $apellidos):void {
        Propietario::factory()->create(
            ['id'=>$id, 'email'=>$email, 'nombre'=>$nombre, 'apellidos'=>$apellidos]
        );
    }

}
