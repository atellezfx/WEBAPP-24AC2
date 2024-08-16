import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AgregarComponent } from './components/agregar/agregar.component';
import { MascotaComponent } from './components/mascota/mascota.component';
import { EditarComponent } from './components/editar/editar.component';
import { EliminarComponent } from './components/eliminar/eliminar.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, AgregarComponent, MascotaComponent, EditarComponent, EliminarComponent, CatalogoComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'DogtorPET';

  constructor( public authSvc:AuthService ) { }

  public cerrarSesion(): void {
    this.authSvc.logout();
  }

}
