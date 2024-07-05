import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AgregarComponent } from './components/agregar/agregar.component';
import { MascotaComponent } from './components/mascota/mascota.component';
import { EditarComponent } from './components/editar/editar.component';
import { EliminarComponent } from './components/eliminar/eliminar.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { LoginComponent } from './components/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AgregarComponent, MascotaComponent, EditarComponent, EliminarComponent, CatalogoComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DogtorPET';
}
