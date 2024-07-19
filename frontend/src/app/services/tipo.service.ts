import { Injectable } from '@angular/core';
import { Tipo } from '../models/tipo';
import { tiposPrueba } from '../util/datos-prueba';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoService {

    // TODO: Implmementar la URL del sevidor (backend)

    constructor() { }

    public obtener( id:number ): Observable<Tipo> {
      const resultado = tiposPrueba.filter( t => t.id == id );
      return of( resultado[0] );
    }

    public lista( ): Observable<Tipo[]> {
      return of( tiposPrueba );
    }

}
