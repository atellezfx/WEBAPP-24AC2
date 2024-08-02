<?php

namespace Database\Seeders;

use App\Models\Mascota;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MascotaSeeder extends Seeder {

    public function run(): void {
        $this->create('Denver', 1, '2014-11-18', 'Metizo/Labrador', 'Miel', 'macho', 1, 'https://raw.githubusercontent.com/atellezf/atellezf.github.io/master/perros/denver.jpg');
        $this->create('Camy', 1, '2014-11-18', 'Mestizo/Labrador', 'Miel/Blanco', 'hembra', 1, 'https://raw.githubusercontent.com/atellezf/atellezf.github.io/master/perros/camy.jpg');
        $this->create('Kia', 1, '2016-01-28', 'Mestizo/Galgo', 'Atigrado', 'hembra', 1, 'https://raw.githubusercontent.com/atellezf/atellezf.github.io/master/perros/kia.jpg');
        $this->create('Hamilton', 1, '2018-04-05', 'Corgi', 'Miel', 'macho', 1, 'https://raw.githubusercontent.com/atellezf/atellezf.github.io/master/perros/hamilton.jpg');
        $this->create('Olivia', 1, '2026-08-25', 'Corgi', 'Miel/Blanco', 'hembra', 1, 'https://raw.githubusercontent.com/atellezf/atellezf.github.io/master/perros/olivia.jpg');
        $this->create('Theodore', 1, '2021-11-25', 'Ragdoll', 'Blanco/Gris', 'macho', 2, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJMoYr8zSHRLKARvYssUFwdOMDguDIKqXd5gCJ9Odg7Sk1ZgZPMOANB1UWmQgkHTjIXH8&usqp=CAU');
        $this->create('Wera', 2, '2012-09-16', 'Cocker Spagniel', 'Miel', 'hembra', 1, 'https://misanimales.com/wp-content/uploads/2018/11/cocker-spaniel.jpg');
        $this->create('Maya', 2, '2016-10-02', 'Border Collie', 'Negro/Blanco', 'hembra', 1, 'https://t2.uc.ltmcdn.com/es/posts/8/3/6/como_saber_si_un_border_collie_es_puro_44638_600_square.jpg');
        $this->create('Roco', 3, '2012-03-30', 'Barbet', 'Blanco/Beige', 'macho', 1, 'http://3.bp.blogspot.com/-FPdBxjVjE3U/Uae3pg2Qh3I/AAAAAAAALVU/dUCWJRqh5fk/s1600/67.jpg');
        $this->create('Lucky', 3, '2010-03-30', 'Cocker Spagniel', 'Blanco/Beige', 'macho', 1, 'https://images.pexels.com/photos/11161177/pexels-photo-11161177.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');
        $this->create('Chicharito', 4, '2018-12-19', 'Mestizo', 'Negro/Blanco', 'macho', 1, 'https://i.pinimg.com/474x/26/4e/ca/264eca5cd5a8fae9ff8f6d77b42d4a68.jpg');
        $this->create('Aquiles', 4, '2016-03-30', 'Pit Bull', 'Blanco/Beige', 'macho', 1, 'https://i.pinimg.com/originals/0e/f6/7a/0ef67a2ae564032c7eb80ba870e7ba73.jpg');
        $this->create('Molly', 5, '2021-11-30', 'Pomerania', 'Beige', 'hembra', 1, 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Pomeranian_Thank_You.jpg/250px-Pomeranian_Thank_You.jpg');
    }

    private function create(string $nombre, int $propietario, string $fechaNac, string $raza, string $color, string $genero, int $tipo, string $fotoUrl=null):void {
        Mascota::factory()->create([
            'nombre'=>$nombre, 'propietario'=>$propietario, 'fechaNac'=>$fechaNac, 'raza'=>$raza, 'color'=>$color, 'genero'=>$genero, 'tipo'=>$tipo, 'fotoUrl'=>$fotoUrl
        ]);
    }

}
