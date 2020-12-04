import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { PlansComponent } from './components/plans/plans.component';
import { PaymentComponent } from './components/payment/payment.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PlansComponent, PaymentComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ClientModule { }
