<?php

namespace Database\Seeders;

use App\Models\Freelancer;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Project;
use App\Models\ServiceCategory;
use App\Models\UserChat;
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
            ServiceCategorySeeder::class,
            ClientSeeder::class,
            ClientProfileSeeder::class,
            FreelancerSeeder::class,
            FreelancerProfileSeeder::class,
            FreelancerLikeSeeder::class,
            FreelancerViewSeeder::class,
            ProjectSeeder::class,
            ProjectCategorySeeder::class,
            ProjectBidSeeder::class,
            ProjectUserSeeder::class,
            CommentSeeder::class,
            UserChatSeeder::class,
            FileSeeder::class,
        ]);
    }
}
