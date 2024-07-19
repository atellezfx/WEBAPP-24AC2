import { Injectable } from '@angular/core';
import { Propietario } from '../models/propietario';
import { Observable, of } from 'rxjs';
import { Mascota } from '../models/mascota';
import { mascotasPrueba, propietariosPrueba } from '../util/datos-prueba';

@Injectable({
  providedIn: 'root'
})
export class PropietarioService {

  // TODO: Implmementar la URL del sevidor (backend)

  constructor() { }

  public obtener( id:number ): Observable<Propietario> {
    const resultado = propietariosPrueba.filter( p => p.id == id );
    return of( resultado[0] );
  }

  public lista( ): Observable<Propietario[]> {
    return of( propietariosPrueba );
  }

}
