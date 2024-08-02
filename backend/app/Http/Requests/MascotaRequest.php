<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class MascotaRequest extends FormRequest {
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array {
        return [
            'nombre' => 'required|string|max:255',
            'propietario' => 'required|integer|exists:propietarios,id',
            'fechaNac' => 'required|date',
            'raza' => 'required|string|max:255',
            'color' => 'required|string|max:255',
            'genero' => 'required|in:macho,hembra',
            'tipo' => 'required|integer|exists:tipos,id',
            'fotoUrl' => 'nullable|string|max:255'
        ];
    }
}
