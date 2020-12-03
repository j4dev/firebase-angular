import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { IndexComponent } from './components/index/index.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
