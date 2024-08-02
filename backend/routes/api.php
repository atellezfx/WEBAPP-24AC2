<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\MascotaController;
use App\Http\Controllers\PropietarioController;
use App\Http\Controllers\TipoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Ejemplo: https://127.0.0.1:8000/api/auth/login
Route::group(['middleware' => 'api', 'prefix' => 'auth'], function($router) {
    Route::post('login', [AuthController::class, 'login']);
    Route::get('logout', [AuthController::class, 'logout']);
    Route::post('refresh', [AuthController::class, 'refresh']);
    Route::post('me', [AuthController::class, 'me']);
});

// Ejemplo: https://127.0.0.1:8000/api/v1/mascotas
//          https://127.0.0.1:8000/api/v1/mascotas/catalogo/5
Route::group(['middleware' => 'api', 'prefix' => 'v1'], function($router) {
    // Siempre colocar la ruta en plural (para que Laravel encuentre el parámetro) en singular en el controlador
    Route::apiResource('tipos', TipoController::class);
    Route::apiResource('propietarios', PropietarioController::class);
    Route::apiResource('mascotas', MascotaController::class);
    Route::get('mascotas/catalogo/{propietario}', [MascotaController::class, 'catalogo']);
});

// Ejemplo: https://127.0.0.1:8000/login
Route::get('login', function() {
    return app()->abort(401);
})->name('login');
