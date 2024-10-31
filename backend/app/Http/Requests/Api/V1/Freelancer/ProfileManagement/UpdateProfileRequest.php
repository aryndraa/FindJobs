<?php

namespace App\Http\Requests\Api\V1\Freelancer\ProfileManagement;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProfileRequest extends FormRequest
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
            'bio'          => ['string', 'max:80'],
            'about'        => ['string', 'max:500'],
            'phone'        => ['string'],
            'country'      => ['string'],
            'avatar'       => ['file', 'mimes:jpeg,png,jpg,gif,svg', 'max:2048'],
            'back_cover'   => ['file', 'mimes:jpeg,png,jpg,gif,svg', 'max:2048'],
            'categories'   => ['array'],
            'categories.*' => ['string', 'exists:categories,id'],
        ];
    }
}
