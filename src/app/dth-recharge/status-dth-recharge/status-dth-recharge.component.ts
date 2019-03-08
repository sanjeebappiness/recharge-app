import { Component, OnInit } from '@angular/core';
import { DthrechargeService } from '../dthrecharge.service';
import { DTH } from 'src/app/model/dth.model';

@Component({
  selector: 'app-status-dth-recharge',
  templateUrl: './status-dth-recharge.component.html',
  styleUrls: ['./status-dth-recharge.component.scss']
})
export class StatusDthRechargeComponent implements OnInit {
  dthData: DTH = {
    customerId: '',
    amount: null,
    operator: ''
  };
  constructor(private dthrechargeService: DthrechargeService ) { }

  ngOnInit() {
    this.dthrechargeService.dthDataObservable().subscribe((data: DTH) => {
      this.dthData = data;
    });
  }

}
