import { Component, OnInit } from '@angular/core';
import { Mascota } from '../../models/mascota';
import { mascotasPrueba } from '../../util/datos-prueba';
import { MascotaComponent } from "../mascota/mascota.component";

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [MascotaComponent],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent implements OnInit {

  mascotas:Mascota[];

  constructor() {
    // TODO: Reemplazarlo por una llamada al método lista() del servicio de mascotas
    this.mascotas = mascotasPrueba;
  }

  public ngOnInit(): void{
    // TODO: Implementar la lógica para cargar todos los propietarios
  }


}
