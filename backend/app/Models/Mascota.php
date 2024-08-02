<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mascota extends Model {

    use HasFactory;

    protected $fillable = [
        'nombre',
        'propietario',
        'fechaNac',
        'raza',
        'color',
        'genero',
        'tipo',
        'fotoUrl'
    ];

}
