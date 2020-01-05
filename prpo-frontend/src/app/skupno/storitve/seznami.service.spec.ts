import { TestBed } from '@angular/core/testing';

import { SeznamiService } from './seznami.service';

describe('SeznamiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeznamiService = TestBed.get(SeznamiService);
    expect(service).toBeTruthy();
  });
});
