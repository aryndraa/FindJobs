<?php

namespace Database\Factories;

use App\Models\Client;
use App\Models\Freelancer;
use App\Models\Project;
use App\Models\Service;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\File>
 */
class FileFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $relatedType = $this->faker->randomElement([Freelancer::class, Client::class, Service::class, Project::class]);
        $relatedId   = $relatedType::query()->inRandomOrder()->value('id');

        return [
            'file_name'    => fake()->word() . '.'. $this->faker->fileExtension(),
            'file_path'    => fake()->filePath(),
            'file_type'    => fake()->mimeType(),
            'related_id'   => $relatedId,
            'related_type' => $relatedType,
        ];
    }
}
