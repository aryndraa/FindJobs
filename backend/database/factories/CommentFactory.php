<?php

namespace Database\Factories;

use App\Models\Freelancer;
use App\Models\Project;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
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
        return [
            "freelancer_id" => Freelancer::inRandomOrder()->first()->id,
            "project_id"    => Project::inRandomOrder()->first()->id,
            "comment"       => $this->faker->realText(),
        ];
    }
}
