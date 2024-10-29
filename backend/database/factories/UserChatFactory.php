<?php

namespace Database\Factories;

use App\Models\Client;
use App\Models\Freelancer;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\UserChat>
 */
class UserChatFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $receiverType = fake()->randomElement([Client::class, Freelancer::class]);
        $receiverId = $receiverType::query()->inRandomOrder()->first()->id;
        $senderType = fake()->randomElement([Client::class, Freelancer::class]);
        $senderId = $senderType::query()->inRandomOrder()->first()->id;

        return [
            'receiver_id' => $receiverId,
            'sender_id' => $senderId,
            'receiver_type' => $receiverType,
            'sender_type' => $senderType,
            'message' => fake()->sentence(),
        ];
    }
}
