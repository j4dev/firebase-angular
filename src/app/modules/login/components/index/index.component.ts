import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";

import { FirebaseService } from "../../../../services/firebase.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private router: Router,
    private firebaseService: FirebaseService
  ) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
			'email' : [null, [Validators.required, Validators.email]],
      'password' : [null, Validators.required]
    });
  }

  onSubmit(user: any){
    this.firebaseService.getUser().subscribe(res => {
      let email:boolean=false;
      let pass:boolean=false;
      res.map((e: any) =>{
        if (user.email == e.payload.doc.data().email) {
          email = true;
          if (user.password == e.payload.doc.data().password) {
            pass = true;
            localStorage.setItem('user_name',e.payload.doc.data().user_name);
            localStorage.setItem('email',e.payload.doc.data().email);
            localStorage.setItem('tipo',e.payload.doc.data().user_tipo);
          }
        }
      });

      if(email){
        if(pass){
          this.router.navigate(['/']);
        }
        else{
          alert('Contraseña Incorrecta. Reintente de nuevo');
        }
      }else{
        alert('Nombre de Usuario Incorrecto. Reintente de nuevo');
      }
      
    }, error => {
      console.log(error);
    })
  }

  get f() { return this.loginForm.controls; }
}
