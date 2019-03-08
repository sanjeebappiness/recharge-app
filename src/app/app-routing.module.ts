import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'mobile',
    loadChildren: './mobile-recharge/mobile-recharge.module#MobileRechargeModule'
  },
  {
    path: 'dth',
    loadChildren: './dth-recharge/dth-recharge.module#DthRechargeModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
