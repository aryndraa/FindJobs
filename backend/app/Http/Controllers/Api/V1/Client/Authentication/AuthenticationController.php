<?php

namespace App\Http\Controllers\Api\V1\Client\Authentication;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\V1\Client\Authentication\LoginRequest;
use App\Http\Requests\Api\V1\Client\Authentication\RegisterRequest;
use App\Models\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthenticationController extends Controller
{
    public function login(LoginRequest $request)
    {
        $validator =$request->only('credentials', 'password');

        $client = Client::query()
            ->where('email', $validator['credentials'])
            ->orWhere('username', $validator['credentials'])
            ->first();

        if(!$client || !Hash::check($validator['password'], $client->password)) {
            throw ValidationException::withMessages([
                'credentials' => 'username/email or password is incorrect',
            ]);
        }

        $token = $client->createToken('client')->plainTextToken;

        return response()->json([
            'data' => [
                'token' => $token,
            ]
        ]);
    }

    public function register(RegisterRequest $request)
    {
        $client = Client::query()->create([
            'name' => $request->name,
            'username' => $request->username,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);

        $token = $client->createToken('client')->plainTextToken;

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
