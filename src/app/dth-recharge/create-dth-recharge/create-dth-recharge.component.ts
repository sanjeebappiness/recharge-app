import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DTH } from 'src/app/model/dth.model';
import { DthrechargeService } from '../dthrecharge.service';
import { Router, ActivatedRoute } from '@angular/router';

export interface Operator {
  id: string;
  name: string;
}

@Component({
  selector: 'app-create-dth-recharge',
  templateUrl: './create-dth-recharge.component.html',
  styleUrls: ['./create-dth-recharge.component.scss']
})

export class CreateDthRechargeComponent implements OnInit {

  dthData: DTH = {
    customerId: '',
    amount: null,
    operator: ''
  };

  operators: Operator[] = [{ id: '1', name: 'Airtel Digital TV' },
  { id: '2', name: 'Dish TV' },
  { id: '3', name: 'Sun Direct' },
  { id: '4', name: 'Tata Sky' },
  { id: '5', name: 'd2h(Videocon d2h)' }
  ];
  submit = false;

  rechargeForm: FormGroup;

  constructor(private fb: FormBuilder,
              private dthrechargeService: DthrechargeService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.rechargeForm = this.fb.group({
      customerId: ['', Validators.required],
      amount: [null, Validators.required],
      operator: ['', Validators.required]
    });

    if (this.route.snapshot.paramMap.get('mode') === 'edit') {
      this.dthrechargeService.dthDataObservable().subscribe((data: DTH) => {
        this.updateFormdata(data);
      });
    }
  }

  updateFormdata(data: DTH) {
    this.rechargeForm = this.fb.group({
      customerId: [data.customerId, Validators.required],
      amount: [data.amount, Validators.required],
      operator: [data.operator, Validators.required]
    });
  }
  get f() { return this.rechargeForm.controls; }



  onSubmit() {
    this.submit = true;
    if (this.rechargeForm.valid) {
      this.dthrechargeService.changeDthData(this.rechargeForm.value);
      this.router.navigateByUrl('dth/details');
    }
  }
}
