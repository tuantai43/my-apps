import { TestBed } from '@angular/core/testing';

import { SubSubjectTypeService } from './sub-subject-type.service';

describe('SubSubjectTypeService', () => {
  let service: SubSubjectTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubSubjectTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
