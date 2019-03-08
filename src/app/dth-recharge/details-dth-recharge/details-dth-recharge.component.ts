import { Component, OnInit } from '@angular/core';
import { DTH } from 'src/app/model/dth.model';
import { DthrechargeService } from '../dthrecharge.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-details-dth-recharge',
  templateUrl: './details-dth-recharge.component.html',
  styleUrls: ['./details-dth-recharge.component.scss']
})
export class DetailsDthRechargeComponent implements OnInit {
  dthData: DTH = {
    customerId: '',
    amount: null,
    operator: ''
  };
  showModal = true;

  constructor(private dthrechargeService: DthrechargeService,
              private router: Router) { }

  ngOnInit() {
    this.dthrechargeService.dthDataObservable().subscribe((data: DTH) => {
      this.dthData = data;
    });
  }
  hideModal() {
    this.showModal = false;
    this.router.navigateByUrl('/dth');
  }
  editRecharge() {
    this.dthrechargeService.changeDthData(this.dthData);
    this.router.navigateByUrl('/dth/recharge/edit');
  }

}
