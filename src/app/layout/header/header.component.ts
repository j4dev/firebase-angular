import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userName:string = "";
  tipoUser: string = "";
  constructor(
    private authservice:AuthService
  ) { }

  ngOnInit(): void {
    this.userName = localStorage.getItem('user_name') + "  ";
    this.tipoUser = localStorage.getItem('tipo');
  }

  logoutUser(){
    this.authservice.logout();
  }
}
