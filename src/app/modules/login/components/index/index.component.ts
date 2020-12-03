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
  users:any;

  constructor(
    private formBuilder: FormBuilder, 
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
			'user_name' : [null, Validators.required],
      'password' : [null, Validators.required],
      'user_tipo' : [null,Validators.required]
    });

  }

  onSubmit(form: any){
    
  }
}
