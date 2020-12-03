import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
  ) { }

  ngOnInit(): void {

    this.RegisterForm = this.formBuilder.group({
      'user_name' : [null, Validators.required],
      'email' : [null, Validators.required, Validators.email],
      'password' : [null, Validators.required],
      'user_tipo' : [null,Validators.required]
    });

  }

  onSubmit(user: any){
    console.log(user);
    
  }

}
