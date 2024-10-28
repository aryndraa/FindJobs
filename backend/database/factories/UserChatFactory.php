<?php

namespace Database\Factories;

use App\Models\Client;
use App\Models\Freelancer;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
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
        $senderType = $this->faker->randomElement([Client::class, Freelancer::class]);
        $receiverType = $this->faker->randomElement([Client::class, Freelancer::class]);

        while ($senderType === $receiverType) {
            $receiverType = $this->faker->randomElement([Client::class, Freelancer::class]);
        }

        $sender = $senderType::inRandomOrder()->first();
        $receiver = $receiverType::inRandomOrder()->first();

        return [
            'sender_id'     => $sender->id,
            'sender_type'   => $senderType,
            'receiver_id'   => $receiver->id,
            'receiver_type' => $receiverType,
            'message'       => $this->faker->sentence,
        ];
    }
}
