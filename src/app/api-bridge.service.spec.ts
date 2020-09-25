import { TestBed } from '@angular/core/testing';

import { ApiBridgeService } from './api-bridge.service';

describe('ApiBridgeService', () => {
  let service: ApiBridgeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiBridgeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
