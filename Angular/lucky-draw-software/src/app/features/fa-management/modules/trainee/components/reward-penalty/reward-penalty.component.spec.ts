import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardPenaltyComponent } from './reward-penalty.component';

describe('RewardPenaltyComponent', () => {
  let component: RewardPenaltyComponent;
  let fixture: ComponentFixture<RewardPenaltyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RewardPenaltyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RewardPenaltyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
