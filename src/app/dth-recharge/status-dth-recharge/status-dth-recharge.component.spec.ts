import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusDthRechargeComponent } from './status-dth-recharge.component';

describe('StatusDthRechargeComponent', () => {
  let component: StatusDthRechargeComponent;
  let fixture: ComponentFixture<StatusDthRechargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusDthRechargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusDthRechargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
