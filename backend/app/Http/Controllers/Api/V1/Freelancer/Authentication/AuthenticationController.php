<?php

namespace App\Http\Controllers\Api\V1\Freelancer\Authentication;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\V1\Freelancer\Authentication\LoginRequest;
use App\Http\Requests\Api\V1\Freelancer\Authentication\RegisterRequest;
use App\Models\Freelancer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthenticationController extends Controller
{
    public function login(LoginRequest $request)
    {
        $validator = $request->only('credentials', 'password');

        $freelancer = Freelancer::query()
            ->where('email', $validator['credentials'])
            ->orWhere('username', $validator['credentials'])
            ->first();

        if(!$freelancer || !Hash::check($validator['password'], $freelancer->password)) {
            throw ValidationException::withMessages([
                'credentials' => 'username/email or password is incorrect',
            ]);
        }

        $token = $freelancer->createToken('client')->plainTextToken;

        return response()->json([
            'data' => [
                'token' => $token,
            ]
        ]);
    }

    public function register(RegisterRequest $request)
    {
        $client = Freelancer::query()->create([
            'name'     => $request->name,
            'username' => $request->username,
            'email'    => $request->email,
            'password' => Hash::make($request->password)
        ]);

        $token = $client->createToken('freelancer')->plainTextToken;

        return response()->json([
            'data' => [
                'token' => $token,
            ]
        ]);
    }

    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();

        return response()->noContent();
    }
}
