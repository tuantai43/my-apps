import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuckyDrawLayoutComponent } from './lucky-draw-layout.component';

describe('LuckyDrawLayoutComponent', () => {
  let component: LuckyDrawLayoutComponent;
  let fixture: ComponentFixture<LuckyDrawLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuckyDrawLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LuckyDrawLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
