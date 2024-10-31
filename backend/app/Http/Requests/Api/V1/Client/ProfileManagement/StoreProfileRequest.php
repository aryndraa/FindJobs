<?php

namespace App\Http\Requests\Api\V1\Client\ProfileManagement;

use Illuminate\Foundation\Http\FormRequest;

class StoreProfileRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'bio'     => ['required', 'string', 'max:80'],
            'about'   => ['required', 'string', 'max:500'],
            'phone'   => ['required', 'string'],
            'country' => ['required', 'string'],
            'avatar'  => ['required', 'file', 'mimes:jpeg,png,jpg,gif,svg', 'max:2048'],
        ];
    }
}
