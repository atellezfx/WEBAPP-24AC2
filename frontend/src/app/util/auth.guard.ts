import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject( Router );
  const authSvc = inject( AuthService );
  return authSvc.loggedIn() ? true : router.parseUrl( '/login' );
};
