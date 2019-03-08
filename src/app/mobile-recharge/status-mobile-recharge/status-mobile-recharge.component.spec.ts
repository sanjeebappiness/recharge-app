import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusMobileRechargeComponent } from './status-mobile-recharge.component';

describe('StatusMobileRechargeComponent', () => {
  let component: StatusMobileRechargeComponent;
  let fixture: ComponentFixture<StatusMobileRechargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusMobileRechargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusMobileRechargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
