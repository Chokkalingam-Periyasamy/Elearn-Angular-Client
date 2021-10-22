import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffcourseComponent } from './staffcourse.component';

describe('StaffcourseComponent', () => {
  let component: StaffcourseComponent;
  let fixture: ComponentFixture<StaffcourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffcourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
