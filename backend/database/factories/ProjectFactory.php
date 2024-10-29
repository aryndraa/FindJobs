<?php

namespace Database\Factories;

use App\Models\Client;
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
        return [
            'client_id'    => Client::query()->inRandomOrder()->first()->id,
            'title'        => fake()->jobTitle(),
            'description'  => fake()->text(),
            'price_min'    => fake()->numberBetween(50000, 500000),
            'price_max'    => fake()->numberBetween(50000, 500000),
            'is_completed' => fake()->boolean(),
            'bid_status'   => fake()->boolean(),
        ];
    }
}
