<?php

namespace Database\Factories;

use App\Models\Client;
use App\Models\Freelancer;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Project>
 */
class ProjectFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $userType = $this->faker->randomElement([Freelancer::class, Client::class]);
        $userId   = $userType::query()->inRandomOrder()->value('id');

        return [
            'user_id'      => $userId,
            "user_type"    => $userType,
            'title'        => fake()->jobTitle(),
            'description'  => fake()->text(),
            'price_min'    => fake()->numberBetween(50000, 500000),
            'price_max'    => fake()->numberBetween(50000, 500000),
            'currency'     => fake()->randomElement(['USD', 'EUR', 'JPY', 'RP']),
            'is_completed' => fake()->boolean(),
            'bid_status'   => fake()->boolean(),
        ];
    }
}
