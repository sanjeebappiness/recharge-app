import { Component, OnInit } from '@angular/core';
import { MobilerechargeService } from '../mobilerecharge.service';
import { Mobile } from 'src/app/model/mobile.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details-mobile-recharge',
  templateUrl: './details-mobile-recharge.component.html',
  styleUrls: ['./details-mobile-recharge.component.scss']
})
export class DetailsMobileRechargeComponent implements OnInit {
  mobileDetails: Mobile = {
    networkType: '',
    mobileNumber: null,
    amount: null,
    operator: ''
  };
  showModal = true;
  constructor(private mobilerechargeService: MobilerechargeService,
              private router: Router) { }

  ngOnInit() {
 this.mobilerechargeService.dataObservable().subscribe((data: Mobile) => {
   this.mobileDetails = data;
 });
  }

  hideModal() {
    this.showModal = false;
    this.router.navigateByUrl('/mobile');

  }
  editRecharge() {
    this.mobilerechargeService.changeMobileData(this.mobileDetails);
    this.router.navigateByUrl('/mobile/recharge/edit');
  }

}
