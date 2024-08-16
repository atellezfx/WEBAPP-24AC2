import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Mascota } from '../../models/mascota';
import { DatePipe } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EliminarComponent } from '../eliminar/eliminar.component';

@Component({
  selector: 'app-mascota',
  standalone: true,
  imports: [ DatePipe, RouterModule ],
  templateUrl: './mascota.component.html',
  styleUrl: './mascota.component.css'
})
export class MascotaComponent {

  @Input()
  mascota!:Mascota;

  @Output()
  emisor = new EventEmitter<Mascota>();

  constructor( private router:Router, private modalSvc:NgbModal ) { }

  public confirmarEliminar( evt:Event ): void {
    const dialogo = this.modalSvc.open( EliminarComponent, {centered:true} );
    dialogo.componentInstance.mensaje = `¿Estás seguro de eliminar el registro de ${this.mascota.nombre}`;
    dialogo.result.then( opcion => {
      if( opcion ) this.emisor.emit( this.mascota );
    } );
    evt.stopPropagation();
  }

  public editar():void {
    this.router.navigateByUrl(`/editar/${this.mascota.id}`,{ state:{mascota:this.mascota} });
  }

}
