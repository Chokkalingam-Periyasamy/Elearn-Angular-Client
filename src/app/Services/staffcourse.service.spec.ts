import { TestBed } from '@angular/core/testing';

import { StaffcourseService } from './staffcourse.service';

describe('StaffcourseService', () => {
  let service: StaffcourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaffcourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
