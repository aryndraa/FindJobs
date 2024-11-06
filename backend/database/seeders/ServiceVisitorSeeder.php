<?php

namespace Database\Seeders;

use App\Models\ServiceVisitor;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ServiceVisitorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $totalRecords = 10;
        $chunkSize = 10;
        $chunks = array_chunk(range(1, $totalRecords), $chunkSize);

        foreach ($chunks as $chunk) {
            ServiceVisitor::factory()->count(count($chunk))->create();
        }
    }
}