<?php

namespace Database\Factories;

use App\Models\Freelancer;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Service>
 */
class ServiceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'freelancer_id' => Freelancer::query()->inRandomOrder()->first()->id,
            'name'          => fake()->name(),
            'description'   => $this->faker->text(),
            'price'         => fake()->numberBetween(1000, 999999),
        ];
    }
}
