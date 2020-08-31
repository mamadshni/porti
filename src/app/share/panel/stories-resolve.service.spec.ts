import { TestBed } from '@angular/core/testing';

import { StoriesResolveService } from './stories-resolve.service';

describe('StoriesResolveService', () => {
  let service: StoriesResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoriesResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
