import { TestBed } from '@angular/core/testing';

import { DthrechargeService } from './dthrecharge.service';

describe('DthrechargeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DthrechargeService = TestBed.get(DthrechargeService);
    expect(service).toBeTruthy();
  });
});
