import { Component, OnInit } from '@angular/core';
//import { AuthService } from "src/app/services/auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user:any;
  name_user:any;
  tipoUser:string;
  /*constructor(private authservice:AuthService) { 
    this.user=localStorage.getItem('user_name');
    this.name_user=localStorage.getItem('name');
  }*/

  ngOnInit(): void {
    this.tipoUser = localStorage.getItem('tipo');
  }

  logoutUser(){
    //this.authservice.logout();
  }
}
