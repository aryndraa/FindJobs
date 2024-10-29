<?php

namespace Database\Factories;

use App\Models\Client;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ClientProfile>
 */
class ClientProfileFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'client_id' => Client::query()->inRandomOrder()->first()->id,
            'bio'       => fake()->sentence(),
            'about'     => fake()->paragraph(),
            'phone'     => fake()->phoneNumber(),
            'country'   => fake()->country(),
        ];
    }
}
