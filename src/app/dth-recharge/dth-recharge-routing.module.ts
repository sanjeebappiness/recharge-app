import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateDthRechargeComponent } from './create-dth-recharge/create-dth-recharge.component';
import { DetailsDthRechargeComponent } from './details-dth-recharge/details-dth-recharge.component';
import { StatusDthRechargeComponent } from './status-dth-recharge/status-dth-recharge.component';

const routes: Routes = [
  {
    path: 'recharge/:mode',
    component: CreateDthRechargeComponent
  },
  {
    path: 'details',
    component: DetailsDthRechargeComponent
  },
  {
    path: 'status',
    component: StatusDthRechargeComponent
  }, {
    path: '',
    redirectTo: 'recharge/add',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DthRechargeRoutingModule { }
