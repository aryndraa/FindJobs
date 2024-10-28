<?php

namespace Database\Factories;

use App\Models\Client;
use App\Models\Freelancer;
use App\Models\Model;
use App\Models\Project;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Model>
 */
class ProjectBidFactory extends Factory
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
            "client_id"    => Client::inRandomOrder()->first()->id,
            "project_id"    => Project::inRandomOrder()->first()->id,
        ];
    }
}
