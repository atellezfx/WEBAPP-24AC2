import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { Usuario } from '../models/usuario';
import { usuariosPrueba } from '../util/datos-prueba';

export const USUARIO_ACTUAL = 'usuario-actual';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // TODO: Implementar la URL del servidor (backend)

  constructor( private router:Router ) { }

  public login( usr:{ email:string, password:string } ): Observable<Usuario> {
    // TODO: Implementar el login a través del backend
    const result = usuariosPrueba.filter( u => u.email == usr.email )[0];
    if( result && result.password == usr.password ) {
      localStorage.setItem( USUARIO_ACTUAL, usr.email );
      return of( result );
    } else {
      return throwError( () => new Error('Credenciales Incorrectas') );
    }
  }

  public logout():void {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }

  public usuarioActual(): string | null {
    return localStorage.getItem(USUARIO_ACTUAL);
  }

  public loggedIn(): boolean {
    return !!this.usuarioActual();
  }

}
