import { Injectable } from '@angular/core';
import { Tipo } from '../models/tipo';
import { Observable } from 'rxjs';
import { environment as env } from '../environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TipoService {

  private readonly servidor = `${env.urlServidor}/v1/tipos`;

  constructor( private http:HttpClient ) { }

  public obtener( id:number ): Observable<Tipo> {
    // ej. http://localhost:8000/api/v1/tipos/1
    return this.http.get<Tipo>(`${this.servidor}/${id}`);
  }

  public lista(): Observable<Tipo[]> {
    return this.http.get<Tipo[]>(this.servidor);
  }

}
