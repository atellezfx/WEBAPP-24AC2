import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-eliminar',
  standalone: true,
  imports: [],
  templateUrl: './eliminar.component.html',
  styleUrl: './eliminar.component.css'
})
export class EliminarComponent {

  @Input()
  mensaje!:string;

  constructor( public activeModal:NgbActiveModal ) { }

}
