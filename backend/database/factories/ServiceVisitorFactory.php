<?php

namespace Database\Factories;

use App\Models\Client;
use App\Models\Freelancer;
use App\Models\Service;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ServiceVisitor>
 */
class ServiceVisitorFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $userType = $this->faker->randomElement([Freelancer::class, Client::class]);
        $userId   = $userType::query()->inRandomOrder()->value('id');

        return [
            'service_id' => Service::query()->inRandomOrder()->first()->id,
            'user_id' => $userId,
            'user_type' => $userType,
        ];
    }
}
