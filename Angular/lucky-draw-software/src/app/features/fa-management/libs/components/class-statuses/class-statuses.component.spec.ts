import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassStatusesComponent } from './class-statuses.component';

describe('ClassStatusesComponent', () => {
  let component: ClassStatusesComponent;
  let fixture: ComponentFixture<ClassStatusesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassStatusesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassStatusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
