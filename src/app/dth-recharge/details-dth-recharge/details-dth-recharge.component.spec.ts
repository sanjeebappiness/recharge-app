import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDthRechargeComponent } from './details-dth-recharge.component';

describe('DetailsDthRechargeComponent', () => {
  let component: DetailsDthRechargeComponent;
  let fixture: ComponentFixture<DetailsDthRechargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsDthRechargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsDthRechargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
