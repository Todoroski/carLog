import { TestBed } from '@angular/core/testing';

import { FuelLogService } from './fuel-log.service';

describe('FuelLogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FuelLogService = TestBed.get(FuelLogService);
    expect(service).toBeTruthy();
  });
});
