import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Mascota } from '../../models/mascota';
import { Propietario } from '../../models/propietario';
import { MascotaService } from '../../services/mascota.service';
import { PROP_KEY } from '../catalogo/catalogo.component';

@Component({
  selector: 'app-agregar',
  standalone: true,
  imports: [ RouterModule, FormsModule, ReactiveFormsModule ],
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css'
})
export class AgregarComponent {

  public formulario:FormGroup;
  private prop:Propietario;

  constructor(
    private builder:FormBuilder,
    private router:Router,
    private mascotaSvc:MascotaService
  ) {
    this.prop = JSON.parse( String(sessionStorage.getItem(PROP_KEY))  );
    this.formulario = this.builder.group({
      nombre:['', Validators.required],
      propId:[this.prop.id, Validators.required],
      propietario:[`${this.prop.nombre} ${this.prop.apellidos}`, Validators.required],
      fechaNac:['', Validators.required],
      raza:['', Validators.required],
      color:['', Validators.required],
      genero:['', Validators.required],
      tipo:['', Validators.required],
      fotoUrl:['']
    });
  }

  public enviarDatos():void {
    if( this.formulario.valid ) {
      const mascota:Mascota = {
        nombre: this.formulario.value['nombre'],
        propietario:this.formulario.value['propId'],
        fechaNac: this.formulario.value['fechaNac'],
        raza:this.formulario.value['raza'],
        color:this.formulario.value['color'],
        genero:this.formulario.value['genero'],
        tipo:this.formulario.value['tipo'],
        fotoUrl: this.formulario.value['fotoUrl']
      };
      this.mascotaSvc.insertar( mascota ).subscribe( m => this.router.navigateByUrl('/catalogo') );
    }
  }

}
