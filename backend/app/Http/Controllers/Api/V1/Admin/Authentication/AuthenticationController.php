<?php

namespace App\Http\Controllers\Api\V1\Admin\Authentication;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\V1\Admin\Authentication\LoginRequest;
use App\Http\Requests\Api\V1\Admin\Authentication\RegisterRequest;
use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthenticationController extends Controller
{
    public function login(LoginRequest $request)
    {
        $validator =$request->only('credentials', 'password');

        $admin = Admin::query()
            ->where('email', $validator['credentials'])
            ->first();

        if(!$admin || !Hash::check($validator['password'], $admin->password)) {
            throw ValidationException::withMessages([
                'credentials' => 'Invalid credentials'
            ]);
        }

        $token = $admin->createToken('admin')->plainTextToken;

        return response()->json([
            'data' =>  [
                'token' => $token,
            ]
        ]);
    }

    public function register(RegisterRequest $request)
    {
        $admin = Admin::query()->create([
            'name'  => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);

        $token = $admin->createToken('admin')->plainTextToken;

        return response()->json([
            'data' =>  [
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
