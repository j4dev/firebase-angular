import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './../../shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {

  constructor( 
		private router: Router,
		public authService : AuthService
	) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
      if ( this.authService.getToken() ) {
        return true
      }
      console.log( state ) 
      this.router.navigate( ['/login'] )
  }
  
}
