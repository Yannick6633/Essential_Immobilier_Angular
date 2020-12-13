import { TestBed } from '@angular/core/testing';

import { DemeureService } from './demeure.service';

describe('DemeureService', () => {
  let service: DemeureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemeureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
