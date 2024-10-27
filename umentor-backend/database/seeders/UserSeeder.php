<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        if (!User::where('email', 'matheusmaschio@email.com.br')->first()) {
            User::create([
                'name' => 'Matheu',
                'email' => 'matheusmaschio@email.com.br',
                'situation' => 'Ativo', 
                'admission_date' => '2024-01-01', 
            ]);
        }

        if (!User::where('email', 'kelly@email.com.br')->first()) {
            User::create([
                'name' => 'Kelly',
                'email' => 'kelly@email.com.br',
                'situation' => 'Ativo', 
                'admission_date' => '2024-01-02', 
            ]);
        }

        if (!User::where('email', 'jessica@email.com.br')->first()) {
            User::create([
                'name' => 'Jessica',
                'email' => 'jessica@email.com.br',
                'situation' => 'Ativo', 
                'admission_date' => '2024-01-03', 
            ]);
        }

        if (!User::where('email', 'gabrielly@celke.com.br')->first()) {
            User::create([
                'name' => 'Gabrielly',
                'email' => 'gabrielly@email.com.br',
                'situation' => 'Ativo', 
                'admission_date' => '2024-01-04', 
            ]);
        }
        if (!User::where('email', 'lucas@empresa.com')->first()) {
            User::create([
                'name' => 'Lucas',
                'email' => 'lucas@empresa.com',
                'situation' => 'Ativo',
                'admission_date' => '2024-02-01',
            ]);
        }
        
        if (!User::where('email', 'ana@empresa.com')->first()) {
            User::create([
                'name' => 'Ana',
                'email' => 'ana@empresa.com',
                'situation' => 'Ativo',
                'admission_date' => '2024-02-15',
            ]);
        }
        
        if (!User::where('email', 'carlos@empresa.com')->first()) {
            User::create([
                'name' => 'Carlos',
                'email' => 'carlos@empresa.com',
                'situation' => 'Inativo',
                'admission_date' => '2023-12-20',
            ]);
        }
        
        if (!User::where('email', 'juliana@empresa.com')->first()) {
            User::create([
                'name' => 'Juliana',
                'email' => 'juliana@empresa.com',
                'situation' => 'Ativo',
                'admission_date' => '2024-01-10',
            ]);
        }
        
        if (!User::where('email', 'pedro@empresa.com')->first()) {
            User::create([
                'name' => 'Pedro',
                'email' => 'pedro@empresa.com',
                'situation' => 'Ativo',
                'admission_date' => '2024-03-01',
            ]);
        }
        
        if (!User::where('email', 'maria@empresa.com')->first()) {
            User::create([
                'name' => 'Maria',
                'email' => 'maria@empresa.com',
                'situation' => 'Inativo',
                'admission_date' => '2023-11-05',
            ]);
        }
        
        if (!User::where('email', 'roberto@empresa.com')->first()) {
            User::create([
                'name' => 'Roberto',
                'email' => 'roberto@empresa.com',
                'situation' => 'Ativo',
                'admission_date' => '2024-01-25',
            ]);
        }
        
        if (!User::where('email', 'sara@empresa.com')->first()) {
            User::create([
                'name' => 'Sara',
                'email' => 'sara@empresa.com',
                'situation' => 'Ativo',
                'admission_date' => '2024-02-10',
            ]);
        }
        
        if (!User::where('email', 'fernando@empresa.com')->first()) {
            User::create([
                'name' => 'Fernando',
                'email' => 'fernando@empresa.com',
                'situation' => 'Ativo',
                'admission_date' => '2024-03-15',
            ]);
        }
        
        if (!User::where('email', 'larissa@empresa.com')->first()) {
            User::create([
                'name' => 'Larissa',
                'email' => 'larissa@empresa.com',
                'situation' => 'Inativo',
                'admission_date' => '2023-12-05',
            ]);
        }
        
    }
}