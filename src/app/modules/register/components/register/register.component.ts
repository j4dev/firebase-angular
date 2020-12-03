import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { FirebaseService } from "../../../../services/firebase.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  RegisterForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private router: Router,
    private firebaseService: FirebaseService
  ) { }

  ngOnInit(): void {

    this.RegisterForm = this.formBuilder.group({
      'user_name' : ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
      'email' : ['', [Validators.required, Validators.email]],
      'password' : ['', Validators.required],
      'user_tipo' : ['',Validators.required]
    });

    this.firebaseService.getUser().subscribe(res => {
      //console.log(res);
      
    }, error => {
      console.log(error);
    })
  }

  onSubmit(user: any){
    console.log(user);
    this.firebaseService.createUser(user).then(res => {
      this.RegisterForm.reset();
    }).catch(error => {
      console.log(error);
      
    })
  }

  get f() { return this.RegisterForm.controls; }
}
