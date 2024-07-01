# Creación de un proyecto en Angular

1. Instalar Node [https://nodejs.org/es/](https://nodejs.org/es/)

2. Verificar la instalación con los siguientes comandos

    ```bash
    $ node -v
    $ npm -v
    ```

3. Instalar Angular globalmente, con el siguiente comando

    ```bash
    $ npm install -g @angular/cli
    ```

4. Creación del proyecto, con el siguiente comando

    ```bash
    $ cd frontend
    $ ng new dogtorpet --directory ./
    ```

    Seleccionando las siguientes opciones:
    ```
    - Which stylesheet format would you like to use? CSS
    - Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? No
    ```

5. Acceder a la carpeta nueva llamada frontend

    ```bash
    $ cd frontend
    ```

6. Instalar dependencias del proyecto

    ```bash
    $ ng add @ng-bootstrap/ng-bootstrap
    ```
7. Agregar las hojas de estilo para fuentes en el archivo styles.css:

    ```css
    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css');
	@import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;700&display=swap');

	body {
	  font-family: 'Sora', Arial, Helvetica, sans-serif;
	}
    ```
8. Para levantar el seridor de Angular para desarrollo, ejecutar el siguiente comando desde la carpeta `dogtorpet` del proyecto

    ```bash
    $ ng serve
    ```

9. Abrir la siguiente url en el browser
    [http://localhost:4200/](http://localhost:4200/)

# Crear componentes en el proyecto

> **Nota:** Si se encuentra ejecutando el servidor de angular terminar el proceso con `CTRL-C`, después de ejecutar los siguientes comandos podrás volver a levantar el servidor ejecutando el comando `ng serve`.

1. Ejecutar el siguiente comando para crear el componente del login,

    ```bash
    $ ng generate component components/login --skip-tests
    ```
2. Ejecutar el siguiente comanto para crear el componente de una mascota

   ```bash
   $ ng generate component components/mascota --skip-tests
   ```
3. Ejecutar el siguiente comando para crear el componente de catalogo

   ```bash
   $ ng generate component components/catalogo --skip-tests
   ```

4. Ejecutar el siguiente comando para crear el componente de agregar registrto

   ```bash
   $ ng generate component components/agregar --skip-tests
   ```

5. Ejecutar el siguiente comando para crear el componente de editar registro (como ves en algunos casos es solo necesario poner la inicial del subcomando)

   ```bash
   $ ng g c components/editar --skip-tests
   ```

6. Ejecutar el siguiente comando para crear el componente de eliminar registro

    ```bash
    $ ng g c components/eliminar --skip-tests
    ```

7. Ejecutar el siguiente comando para crear el modelo de Usuario

    ```bash
    $ ng g interface models/usuario
    ```

8. Ejecutar el siguiente comando para crear el modelo de Mascota

    ```bash
    $ ng g interface models/mascota
    ```

9. Ejecutar el siguiente comando para crear el modelo de Tipo

    ```bash
    $ ng g interface models/tipo

10. Ejecutar el siguiente comando para crear el modelo de Tipo

    ```bash
    $ ng g interface models/propietario
    ```

11. Ejecutar el siguiente comando para crear los servicios en Angular

    ```bash
    $ ng g service services/mascota --skip-tests
    $ ng g service services/tipo --skip-tests
    $ ng g service services/propietario --skip-tests
    ```

12. Ejecutar el siguiente comando para crear el servicio de Login

    ```bash
    $ ng g service services/login --skip-tests
    ```
13. Agregar las rutas de cada componente en el archivo `app.routes.ts`, el cual debe quedar similar a lo siguiente,

    ```typescript
    import { Routes } from '@angular/router';
    import { AgregarComponent } from './components/agregar/agregar.component';
    import { CatalogoComponent } from './components/catalogo/catalogo.component';
    import { EditarComponent } from './components/editar/editar.component';
    import { EliminarComponent } from './components/eliminar/eliminar.component';
    import { LoginComponent } from './components/login/login.component';

    export const routes: Routes = [
        { path: '', redirectTo: '/catalogo', pathMatch: 'full' },
        { path: 'login', component: LoginComponent },
        { path: 'catalogo', component: CatalogoComponent },
        { path: 'nuevo', component: AgregarComponent },
        { path: 'editar/:id', component: EditarComponent },
        { path: 'eliminar/:id', component: EliminarComponent }
    ];
    ```
14. Ejecutar el siguiente comando para crear el filtro de seguridad (guardas)

    ```bash
    $ ng g guard util/login --skip-tests
    ```
    Seleccionando las siguientes opciones con la barra espaciadora y dar enter para finalizar
    ```bash
    >(*) CanActivate
     ( ) CanActivateChild
     ( ) CanDeactivate
     ( ) CanMatch
    ```
15. Modifica las rutas dentro el archivo `app.routes.ts`, el cual debe quedar similar a lo siguiente,

    ```typescript
    //...
    import { loginGuard } from './guards/login.guard';

    const routes: Routes = [
      { path: '', redirectTo: '/catalogo', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'catalogo', component: CatalogoComponent, canActivate: [loginGuard]  },
      { path: 'nuevo', component: AgregarComponent, canActivate: [loginGuard]  },
      { path: 'editar/:id', component: EditarComponent, canActivate: [loginGuard]  },
      { path: 'eliminar/:id', component: EliminarComponent, canActivate: [loginGuard]  }
    ];

    //...
    ```
16. Ejecutar el siguiente comando para crear el interceptor http para el JWT

    ```bash
    $ ng g interceptor util/auth --skip-tests
    ```

17. Modificar el archivo app.config.ts, deberá quedar de la siguiente manera:

    ```typescript
    import { ApplicationConfig } from '@angular/core';
    import { provideRouter } from '@angular/router';

    import { routes } from './app.routes';
    import { provideHttpClient, withInterceptors } from '@angular/common/http';
    import { authInterceptor } from './util/auth.interceptor';

    export const appConfig: ApplicationConfig = {
      providers: [
        provideRouter( routes ),
        provideHttpClient( withInterceptors([
          authInterceptor
        ]) )
      ]
    };
    ```
