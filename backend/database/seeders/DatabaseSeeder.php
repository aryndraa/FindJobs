<?php

namespace Database\Seeders;

use App\Models\ClientProfile;
use App\Models\Freelancer;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\FreelancerProfile;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            AdminSeeder::class,
            CategorySeeder::class,
            FreelancerSeeder::class,
            ClientSeeder::class,
            ClientProfileSeeder::class,
            FreelancerSeeder::class,
            FreelancerProfileSeeder::class,
            FreelancerStarSeeder::class,
            ProjectSeeder::class,
            ProjectCategorySeeder::class,
            ProjectBidderSeeder::class,
            ProjectHistorySeeder::class,
            ServiceSeeder::class,
            ServiceCategorySeeder::class,
            ServiceLikeSeeder::class,
            ServiceVisitorSeeder::class,
            FileSeeder::class,
            UserChatSeeder::class,
            CommentSeeder::class
        ]);
    }
}
