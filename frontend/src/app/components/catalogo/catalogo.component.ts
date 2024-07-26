import { Component, OnInit } from '@angular/core';
import { Mascota } from '../../models/mascota';
import { MascotaComponent } from "../mascota/mascota.component";
import { MascotaService } from '../../services/mascota.service';
import { PropietarioService } from '../../services/propietario.service';
import { Propietario } from '../../models/propietario';
import { OperatorFunction, Observable, debounceTime, distinctUntilChanged, filter, map } from 'rxjs';
import { NgbTypeaheadModule, NgbTypeaheadSelectItemEvent } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

export const PROP_KEY = 'propietarioActual';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [MascotaComponent, NgbTypeaheadModule, FormsModule],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent implements OnInit {

  mascotas:Mascota[] = [];
  propietarios:Propietario[] = [];
  modelo!: Propietario;

  formatter = (prop:Propietario) => `${prop.nombre} ${prop.apellidos} <${prop.email}>`;

  constructor( private mascotaSvc:MascotaService, private propSvc:PropietarioService ) { }

  public ngOnInit(): void{
    const jsonDoc = sessionStorage.getItem(PROP_KEY);
    this.propSvc.lista().subscribe( props => this.propietarios = props );
    if( jsonDoc ) {
      this.modelo = JSON.parse( jsonDoc );
      this.refrescarTarjetas( this.modelo );
    }
  }

  public actualizaMascotas(event:NgbTypeaheadSelectItemEvent):void {
    sessionStorage.setItem(PROP_KEY, JSON.stringify( event.item ));
    this.refrescarTarjetas( event.item );
  }

  private refrescarTarjetas( prop:Propietario ):void {
    this.mascotaSvc.lista( prop.id ).subscribe(
      arreglo => {
        this.mascotas.length = 0;
        this.mascotas.push(...arreglo);
      }
    );
  }

  search: OperatorFunction<string, readonly Propietario[]> = (text$: Observable<string>) =>
		text$.pipe(
			debounceTime(200),
			distinctUntilChanged(),
			filter((term) => term.length >= 2),
			map((term) => this.propietarios.filter((prop) => new RegExp(term, 'mi').test(prop.email)).slice(0, 10)),
		);

  public eliminar( mascota:Mascota|null ):void {
    // TODO: Implementar lógica de quitar la tarjeta de la mascota eliminada
  }

}
