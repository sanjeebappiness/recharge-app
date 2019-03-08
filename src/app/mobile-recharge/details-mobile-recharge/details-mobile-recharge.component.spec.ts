import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsMobileRechargeComponent } from './details-mobile-recharge.component';

describe('DetailsMobileRechargeComponent', () => {
  let component: DetailsMobileRechargeComponent;
  let fixture: ComponentFixture<DetailsMobileRechargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsMobileRechargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsMobileRechargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
