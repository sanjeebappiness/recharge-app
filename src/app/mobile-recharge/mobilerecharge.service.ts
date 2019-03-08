import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Mobile } from '../model/mobile.model';

@Injectable({
  providedIn: 'root'
})
export class MobilerechargeService {
  mobileDataSubject = new BehaviorSubject<Mobile>({
    networkType : '',
    mobileNumber : null,
    amount : null,
    operator : ''
   });

  constructor() { }


  changeMobileData = (value: Mobile) => {
    this.mobileDataSubject.next(value);
  }

  dataObservable = () => {
    return this.mobileDataSubject.asObservable();
  }
}
