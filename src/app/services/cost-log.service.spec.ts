import { TestBed } from '@angular/core/testing';

import { CostLogService } from './cost-log.service';

describe('CostLogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CostLogService = TestBed.get(CostLogService);
    expect(service).toBeTruthy();
  });
});
