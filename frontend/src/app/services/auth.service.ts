import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment as env } from '../environment';
import { HttpClient } from '@angular/common/http';
import { Status, Token } from '../models/token';

export const USUARIO_ACTUAL = 'usuario-actual';
export const CADENA_TOKEN = 'cadena-token';
export const FORMATO_TOKEN = 'formato-token'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private router:Router, private http:HttpClient ) { }

  public login( usr:{ email:string, password:string } ): Observable<Token|Status> {
    const servidor = `${env.urlServidor}/auth/login`;
    return this.http.post<Token|Status>(servidor, usr);
  }

  public logout():void {
    const servidor = `${env.urlServidor}/auth/logout`;
    this.http.get<Status>(servidor).subscribe(
      result => {
        this.router.navigateByUrl('/login');
        localStorage.clear();
        sessionStorage.clear();
        console.log(result); //TODO: Eliminar llamada a console.log()
      }
    );

  }

  public usuarioActual(): string | null {
    return localStorage.getItem(USUARIO_ACTUAL);
  }

  public loggedIn(): boolean {
    return !!this.usuarioActual();
  }

}
