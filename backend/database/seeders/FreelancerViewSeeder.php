<?php

namespace Database\Seeders;

use App\Models\FreelancerView;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FreelancerViewSeeder extends Seeder
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
            FreelancerView::factory()->count(count($chunk))->create();
        }
    }
}
