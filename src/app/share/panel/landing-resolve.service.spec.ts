import { TestBed } from '@angular/core/testing';

import { LandingResolve } from './landing-resolve.service';

describe('LandingResolveService', () => {
  let service: LandingResolve;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LandingResolve);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
