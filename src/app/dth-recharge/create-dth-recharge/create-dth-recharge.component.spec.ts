import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDthRechargeComponent } from './create-dth-recharge.component';

describe('CreateDthRechargeComponent', () => {
  let component: CreateDthRechargeComponent;
  let fixture: ComponentFixture<CreateDthRechargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDthRechargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDthRechargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
