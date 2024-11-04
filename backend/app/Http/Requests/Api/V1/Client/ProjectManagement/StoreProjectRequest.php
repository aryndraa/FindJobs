<?php

namespace App\Http\Requests\Api\V1\Client\ProjectManagement;

use Illuminate\Foundation\Http\FormRequest;

class StoreProjectRequest extends FormRequest
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
            "title"        => ['required', 'string', 'max:255'],
            "description"  => ['required', 'string'],
            "price_min"    => ['required', 'integer', 'min:1'],
            "price_max"    => ['required', 'integer', 'gt:price_min'],
            "currency"     => ['required', 'string', 'in:USD,EUR,JP,IDR'],
            "categories"   => ['required', 'array'],
            "categories.*" => ['required', 'exists:categories,id'],
        ];
    }
}
