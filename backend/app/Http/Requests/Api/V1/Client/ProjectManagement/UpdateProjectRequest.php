<?php

namespace App\Http\Requests\Api\V1\Client\ProjectManagement;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProjectRequest extends FormRequest
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
            "title"        => ['string', 'max:255'],
            "description"  => ['string'],
            "price_min"    => ['integer', 'min:1'],
            "price_max"    => ['integer', 'gt:price_min'],
            "currency"     => ['string', 'in:USD,EUR,JP,IDR'],
            "categories"   => ['array'],
            "categories.*" => ['exists:categories,id'],
        ];
    }
}
