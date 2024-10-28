<?php

namespace Database\Factories;

use App\Models\Client;
use App\Models\Freelancer;
use App\Models\Project;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class ProjectUserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "project_id"    => Project::inRandomOrder()->first()->id,
            "client_id"     => Client::inRandomOrder()->first()->id,
            "freelancer_id" => Freelancer::inRandomOrder()->first()->id,
        ];
    }
}
