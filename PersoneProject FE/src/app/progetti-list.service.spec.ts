import { TestBed } from '@angular/core/testing';

import { ProgettiListService } from './services/progetti-list.service';

describe('ProgettiListService', () => {
  let service: ProgettiListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgettiListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
