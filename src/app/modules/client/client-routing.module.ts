import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlansComponent } from "./components/plans/plans.component";
import { PaymentComponent } from "./components/payment/payment.component";

const routes: Routes = [
  {
    path: '',
    component: PlansComponent
  },
  {
    path: 'pago',
    component: PaymentComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
