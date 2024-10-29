<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\Freelancer;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class FreelancerProfileFactory extends Factory
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
            'category_id'   => Category::query()->inRandomOrder()->first()->id,
            'bio'           => fake()->sentence(),
            'about'         => fake()->paragraph(),
            'phone'         => fake()->phoneNumber(),
            'country'       => fake()->country(),
        ];
    }
}
