import { Component, OnInit } from '@angular/core';
import { MobilerechargeService } from '../mobilerecharge.service';
import { Mobile } from 'src/app/model/mobile.model';

@Component({
  selector: 'app-status-mobile-recharge',
  templateUrl: './status-mobile-recharge.component.html',
  styleUrls: ['./status-mobile-recharge.component.scss']
})
export class StatusMobileRechargeComponent implements OnInit {

  mobileDetails: Mobile = {
    networkType: '',
    mobileNumber: null,
    amount: null,
    operator: ''
  };
  constructor(private mobilerechargeService: MobilerechargeService) { }

  ngOnInit() {
 this.mobilerechargeService.dataObservable().subscribe((data: Mobile) => {
   this.mobileDetails = data;
 });
  }

}
