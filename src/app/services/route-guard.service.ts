import { Injectable } from '@angular/core';
import { TokenStorageService } from '../auth/token-storage.service';

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(
    private tokenStorageService: TokenStorageService,
    private router: Router
  ) { 

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.tokenStorageService.isUserLoggedIn())
      return true;

    this.router.navigate(['login']);

    return false;
  }
  
}
