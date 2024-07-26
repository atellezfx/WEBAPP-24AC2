import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ FormsModule, ReactiveFormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  formulario:FormGroup;
  mensajeError:string = '';

  constructor( private builder:FormBuilder, private authSvc:AuthService, private router:Router ) {
    this.formulario = builder.group( {
      email:['', [ Validators.required, Validators.email ]],
      password:['', Validators.required ]
    } );
  }

  public enviarDatos() {
    if( this.formulario.valid ) {
      const credenciales = this.formulario.value;
      this.authSvc.login( credenciales ).subscribe({
        next: datos => this.procesarRespuesta( datos, credenciales ),
        error: datos => this.mensajeError = datos
      });
    } else {
      this.mensajeError = 'Formulario incompleto';
    }
  }

  private procesarRespuesta(datos:any, usr:Usuario): void {
    // TODO: Implementar guardar datos de usuario y token en localStorage
    this.router.navigateByUrl('/catalogo');
  }


}
