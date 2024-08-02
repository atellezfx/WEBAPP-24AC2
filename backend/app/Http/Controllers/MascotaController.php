<?php

namespace App\Http\Controllers;

use App\Models\Mascota;
use App\Http\Requests\MascotaRequest;
use Illuminate\Http\Request;

class MascotaController extends Controller {

    public function __construct() {
        $this->middleware('auth:api');
    }

    public function index() {
        return Mascota::all();
    }

    public function store(MascotaRequest $request) {
        $msct = Mascota::create( $request->validated() );
        return $msct;
    }

    public function show(Mascota $msct) {
        return $msct;
    }

    public function update(MascotaRequest $request, Mascota $msct) {
        $msct->update( $request->validated() );
        return $msct;
    }

    public function destroy(Mascota $msct) {
        $msct->delete();
        return response()->noContent();
    }

}
