<?php

namespace Database\Factories;

use App\Models\Freelancer;
use App\Models\Project;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ProjectBidder>
 */
class ProjectBidderFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'project_id'    => Project::query()->inRandomOrder()->first()->id,
            'freelancer_id' => Freelancer::query()->inRandomOrder()->first()->id,
        ];
    }
}