import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateMobileRechargeComponent } from './create-mobile-recharge/create-mobile-recharge.component';
import { DetailsMobileRechargeComponent } from './details-mobile-recharge/details-mobile-recharge.component';
import { StatusMobileRechargeComponent } from './status-mobile-recharge/status-mobile-recharge.component';

const routes: Routes = [
  {
    path: 'recharge/:mode',
    component: CreateMobileRechargeComponent
  },
  {
    path: 'details',
    component: DetailsMobileRechargeComponent
  },
  {
    path: 'status',
    component: StatusMobileRechargeComponent
  },
  {
    path: '',
    redirectTo: 'recharge/add',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobileRechargeRoutingModule { }
