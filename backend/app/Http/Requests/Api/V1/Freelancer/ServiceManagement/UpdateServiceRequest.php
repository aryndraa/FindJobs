<?php

namespace App\Http\Requests\Api\V1\Freelancer\ServiceManagement;

use Illuminate\Foundation\Http\FormRequest;

class UpdateServiceRequest extends FormRequest
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
            'name'         => ['required', 'string'],
            'description'  => ['required', 'string', 'max:1000'],
            'price'        => ['required', 'integer', 'min:1'],
            "currency"     => ['required', 'string', 'in:USD,EUR,JP,IDR'],
            "categories"   => ['required', 'array'],
            "categories.*" => ['exists:categories,id'],
            "image"        => ['required', 'file', 'mimes:jpeg,png,jpg,gif,svg', 'max:2048'],
        ];
    }
}
