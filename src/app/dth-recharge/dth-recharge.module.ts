import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DthRechargeRoutingModule } from './dth-recharge-routing.module';
import { CreateDthRechargeComponent } from './create-dth-recharge/create-dth-recharge.component';
import { DetailsDthRechargeComponent } from './details-dth-recharge/details-dth-recharge.component';
import { StatusDthRechargeComponent } from './status-dth-recharge/status-dth-recharge.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateDthRechargeComponent, DetailsDthRechargeComponent, StatusDthRechargeComponent],
  imports: [
    CommonModule,
    DthRechargeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DthRechargeModule { }
