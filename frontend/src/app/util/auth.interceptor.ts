import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService, CADENA_TOKEN, FORMATO_TOKEN } from '../services/auth.service';
import { environment as env } from '../environment';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authSvc = inject(AuthService);
  const esMiServidor = req.url.startsWith( env.urlServidor );
  if( authSvc.loggedIn() && esMiServidor ) {
    const token = localStorage.getItem( CADENA_TOKEN );
    const formato = localStorage.getItem( FORMATO_TOKEN );
    req = req.clone({
      setHeaders:{'Authorization': `${formato} ${token}`}
    });
  }
  return next(req);
};
