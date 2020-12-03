import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';

import { FormsModule,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ModulesModule { }
