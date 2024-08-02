<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Propietario;
use App\Http\Requests\PropietarioRequest;

class PropietarioController extends Controller {

    public function __construct() {
        $this->middleware('auth:api');
    }

    public function index() {
        return Propietario::all();
    }

    public function store(PropietarioRequest $request) {
        $prop = Propietario::create( $request->validated() );
        return $prop;
    }

    public function show(Propietario $prop) {
        return $prop;
    }

    public function update(PropietarioRequest $request, Propietario $prop) {
        $prop->update( $request->validated() );
        return $prop;
    }

    public function destroy(Propietario $prop) {
        $prop->delete();
        return response()->noContent();
    }

}
