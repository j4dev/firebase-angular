import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";

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
  ) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
			'email' : [null, Validators.required, Validators.email],
      'password' : [null, Validators.required]
    });

  }

  onSubmit(user: any){
    
  }
}
