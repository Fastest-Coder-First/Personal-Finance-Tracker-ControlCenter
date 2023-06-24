import { TestBed } from '@angular/core/testing';

import { FinanceTrackerService } from './finance-tracker.service';

describe('FinanceTrackerService', () => {
  let service: FinanceTrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinanceTrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
