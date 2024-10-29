<?php

namespace Database\Factories;

use App\Models\Client;
use App\Models\Freelancer;
use App\Models\Project;
use App\Models\Service;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Comment>
 */
class CommentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $jobType = fake()->randomElement([Project::class, Service::class]);
        $jobId = $jobType::query()->inRandomOrder()->value('id');
        $userType = fake()->randomElement([Client::class, Freelancer::class]);
        $userId = $userType::query()->inRandomOrder()->value('id');

        return [
            'job_type'  => $jobType,
            'job_id'    => $jobId,
            'user_type' => $userType,
            'user_id'   => $userId,
            'comment'   => $this->faker->text(),
        ];
    }
}
