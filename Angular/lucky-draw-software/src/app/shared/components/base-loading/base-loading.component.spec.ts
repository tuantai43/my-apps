import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseLoadingComponent } from './base-loading.component';

describe('BaseLoadingComponent', () => {
  let component: BaseLoadingComponent;
  let fixture: ComponentFixture<BaseLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseLoadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
