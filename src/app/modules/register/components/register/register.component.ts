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
      'user_name' : ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
      'email' : ['', [Validators.required, Validators.email]],
      'password' : ['', Validators.required],
      'user_tipo' : ['',Validators.required]
    });

  }

  onSubmit(user: any){
    console.log(user);
    
  }

  get f() { return this.RegisterForm.controls; }
}
