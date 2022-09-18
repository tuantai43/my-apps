import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilestoneConfigComponent } from './milestone-config.component';

describe('MilestoneConfigComponent', () => {
  let component: MilestoneConfigComponent;
  let fixture: ComponentFixture<MilestoneConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MilestoneConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MilestoneConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
