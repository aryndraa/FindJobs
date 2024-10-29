<?php

namespace Database\Factories;

use App\Models\Client;
use App\Models\Freelancer;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class FreelancerStarFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $userType = $this->faker->randomElement([Client::class, Freelancer::class]);
        $userId = $userType::query()->inRandomOrder()->value('id');

        return [
            'freelancer_id' => Freelancer::query()->inRandomOrder()->first()->id,
            'user_id'      => $userId,
            'user_type'    => $userType,
        ];
    }
}
