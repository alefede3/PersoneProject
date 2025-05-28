import { TestBed } from '@angular/core/testing';

import { SkillListService } from './services/skill-list.service';

describe('SkillListService', () => {
  let service: SkillListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
