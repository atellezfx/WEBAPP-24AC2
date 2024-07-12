import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Mascota } from '../../models/mascota';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-mascota',
  standalone: true,
  imports: [ DatePipe ],
  templateUrl: './mascota.component.html',
  styleUrl: './mascota.component.css'
})
export class MascotaComponent {

  @Input()
  mascota!:Mascota;

  @Output()
  emisor = new EventEmitter<Mascota>();

  constructor() { }

  public confirmarEliminar( evt:Event ): void {
    // TODO: Implementar el proceso de eliminar el registro de la mascota
  }

}
