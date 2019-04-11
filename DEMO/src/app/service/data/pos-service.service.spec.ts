import { TestBed } from '@angular/core/testing';

import { PosServiceService } from './pos-service.service';

describe('PosServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PosServiceService = TestBed.get(PosServiceService);
    expect(service).toBeTruthy();
  });
});
