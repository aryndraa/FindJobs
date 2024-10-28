<?php

namespace Database\Factories;

use App\Models\Freelancer;
use App\Models\ServiceCategory;
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
            "freelancer_id"       => Freelancer::inRandomOrder()->first()->id,
            "service_category_id" => ServiceCategory::inRandomOrder()->first()->id,
            "about"               => fake()->paragraph(),
            "bio"                 => fake()->sentence(),
            "phone"               => fake()->phoneNumber(),
            "country"             => fake()->country(),
        ];
    }
}
