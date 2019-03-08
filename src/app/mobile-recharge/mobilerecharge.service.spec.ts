import { TestBed } from '@angular/core/testing';

import { MobilerechargeService } from './mobilerecharge.service';

describe('MobilerechargeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MobilerechargeService = TestBed.get(MobilerechargeService);
    expect(service).toBeTruthy();
  });
});
