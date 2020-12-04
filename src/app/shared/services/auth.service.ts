import { Injectable } from '@angular/core';

import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router
  ) { }
  
  getToken() {
    return localStorage.getItem('email')
  }
  
  logout() {
    // remove user from local storage
    localStorage.removeItem('user_name');
    localStorage.removeItem('email');
    localStorage.removeItem('tipo');
    localStorage.removeItem('id_user');
    localStorage.removeItem('aprobado');
    this.router.navigate(['/login']);
  }
}
