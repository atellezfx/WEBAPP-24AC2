<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder {
    /**
     * Seed the application's database.
     */
    public function run(): void {

        User::factory()->create([
            'name' => 'MVZ Benito Bodoque',
            'email' => 'test@example.com',
        ]);

        $this->call([
            TipoSeeder::class,
            PropietarioSeeder::class,
            MascotaSeeder::class
        ]);

    }
}
