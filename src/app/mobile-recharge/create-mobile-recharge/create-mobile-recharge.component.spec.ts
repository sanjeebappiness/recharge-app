import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMobileRechargeComponent } from './create-mobile-recharge.component';

describe('CreateMobileRechargeComponent', () => {
  let component: CreateMobileRechargeComponent;
  let fixture: ComponentFixture<CreateMobileRechargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMobileRechargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMobileRechargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
