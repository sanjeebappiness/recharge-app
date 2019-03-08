import { Injectable } from '@angular/core';
import { DTH } from '../model/dth.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DthrechargeService {
  mobileDataSubject = new BehaviorSubject<DTH>({
    customerId: '',
    amount: null,
    operator: ''
   });

  constructor() { }

  changeDthData = (value: DTH) => {
    this.mobileDataSubject.next(value);
  }

  dthDataObservable = () => {
    return this.mobileDataSubject.asObservable();
  }
}
