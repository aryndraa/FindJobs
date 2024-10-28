<?php

namespace Database\Factories;

use App\Models\Project;
use App\Models\ServiceCategory;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class ProjectCategoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "service_category_id" => ServiceCategory::inRandomOrder()->first()->id,
            "project_id"          => Project::inRandomOrder()->first()->id,
        ];
    }
}
