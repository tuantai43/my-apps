import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceStatusDialogComponent } from './attendance-status-dialog.component';

describe('AttendanceStatusDialogComponent', () => {
  let component: AttendanceStatusDialogComponent;
  let fixture: ComponentFixture<AttendanceStatusDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendanceStatusDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceStatusDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
