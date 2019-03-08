import { Component, OnInit } from '@angular/core';
import { Mobile } from 'src/app/model/mobile.model';
import { MobilerechargeService } from '../mobilerecharge.service';
import { Router, ActivatedRoute } from '@angular/router';

export interface Operator {
  id: string;
  name: string;
}


@Component({
  selector: 'app-create-mobile-recharge',
  templateUrl: './create-mobile-recharge.component.html',
  styleUrls: ['./create-mobile-recharge.component.scss']
})
export class CreateMobileRechargeComponent implements OnInit {
  operators: Operator[] = [
    { id: '1', name: 'Vodafone' },
    { id: '2', name: 'AirTel' },
    { id: '3', name: 'Jio' },
    { id: '4', name: 'Aircel' },
    { id: '5', name: 'Reliance' },
    { id: '6', name: 'Idea' }
  ];

  mobileData: Mobile = {
    networkType: '',
    mobileNumber: null,
    amount: null,
    operator: ''
  };
  submit = false;

  constructor(private mobilerechargeService: MobilerechargeService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('mode') === 'edit') {
      this.mobilerechargeService.dataObservable().subscribe((data: Mobile) => {
        this.mobileData = data;
      });
    }
  }

  savedetails(form) {
    this.submit = true;
    if (form.valid) {
      this.mobilerechargeService.changeMobileData(this.mobileData);
      this.router.navigateByUrl('mobile/details');
    }
  }
}
