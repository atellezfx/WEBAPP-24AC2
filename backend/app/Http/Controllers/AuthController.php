<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller {

    public function __construct() {
        $this->middleware('auth:api', ['except' => ['login']]);
    }

    public function login() {
        $credentials = request(['email', 'password']);
        if(! $token = Auth::attempt($credentials) ) {
            return response()->json(['error'=>'Acceso no autorizado'], 401);
        }
        return $this->respondWithToken($token);
    }

    public function me() {
        return response()->json( Auth::user() );
    }

    public function logout() {
        Auth::logout();
        return response()->json(['message'=>'Sesión efectivamente cerrada']);
    }

    public function refresh() {
        return $this->respondWithToken( Auth::refresh() );
    }

    protected function respondWithToken($token) {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => Auth::factory()->getTTL() * 60
        ]);
    }

}
