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
    localStorage.removeItem('user_tipo');
    this.router.navigate(['/login']);
  }
}
