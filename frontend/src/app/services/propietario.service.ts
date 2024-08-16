import { Injectable } from '@angular/core';
import { Propietario } from '../models/propietario';
import { Observable } from 'rxjs';
import { environment as env } from '../environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PropietarioService {

  private readonly servidor = `${env.urlServidor}/v1/propietarios`;

  constructor( private http:HttpClient ) { }

  public obtener( id:number ): Observable<Propietario> {
    // ej. http://localhost:8000/api/v1/propietarios/1
    return this.http.get<Propietario>(`${this.servidor}/${id}`);
  }

  public lista(): Observable<Propietario[]> {
    return this.http.get<Propietario[]>(this.servidor);
  }

}
