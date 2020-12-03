import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user_name:string = "";
  constructor(
    private authservice:AuthService
  ) { }

  ngOnInit(): void {
    this.user_name = localStorage.getItem('user_name') + "  ";
    
  }

  logoutUser(){
    this.authservice.logout();
  }
}
