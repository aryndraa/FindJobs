<?php

namespace Database\Factories;

use App\Models\Client;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
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
        return [
            "client_id"    => Client::inRandomOrder()->first()->id,
            "name"         => fake()->sentence(),
            "description"  => fake()->paragraph(),
            "price_min"    => fake()->numberBetween(1000, 10000),
            "price_max"    => fake()->numberBetween(10000, 100000),
            "is_completed" => fake()->boolean(),
            "bid_status"   => fake()->boolean(),
        ];
    }
}
