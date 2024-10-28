<?php

namespace Database\Factories;

use App\Models\Client;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
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
            "client_id" => Client::inRandomOrder()->first()->id,
            "bio"       => $this->faker->sentence(),
            "about"     => $this->faker->paragraph(),
            "phone"     => $this->faker->phoneNumber(),
            "country"   => $this->faker->country(),
        ];
    }
}
