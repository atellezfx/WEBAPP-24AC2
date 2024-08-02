<?php

namespace App\Http\Controllers;

use App\Http\Requests\TipoRequest;
use App\Models\Tipo;
use Illuminate\Http\Request;

class TipoController extends Controller {

    public function __construct() {
        $this->middleware('auth:api');
    }

    public function index() {
        return Tipo::all();
    }

    public function store(TipoRequest $request) {
        $tipo = Tipo::create( $request->validated() );
        return $tipo;
    }

    public function show(Tipo $tipo) {
        return $tipo;
    }

    public function update(TipoRequest $request, Tipo $tipo) {
        $tipo->update( $request->validated() );
        return $tipo;
    }

    public function destroy(Tipo $tipo) {
        $tipo->delete();
        return response()->noContent();
    }

}
