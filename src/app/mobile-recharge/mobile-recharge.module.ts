import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobileRechargeRoutingModule } from './mobile-recharge-routing.module';
import { CreateMobileRechargeComponent } from './create-mobile-recharge/create-mobile-recharge.component';
import { DetailsMobileRechargeComponent } from './details-mobile-recharge/details-mobile-recharge.component';
import { StatusMobileRechargeComponent } from './status-mobile-recharge/status-mobile-recharge.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateMobileRechargeComponent, DetailsMobileRechargeComponent, StatusMobileRechargeComponent],
  imports: [
    CommonModule,
    MobileRechargeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MobileRechargeModule { }
