import { TestBed } from '@angular/core/testing';

import { ClassAdminService } from './class-admin.service';

describe('ClassAdminService', () => {
  let service: ClassAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
