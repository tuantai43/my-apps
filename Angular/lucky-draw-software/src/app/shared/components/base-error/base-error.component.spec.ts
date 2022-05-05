import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseErrorComponent } from './base-error.component';

describe('BaseErrorComponent', () => {
  let component: BaseErrorComponent;
  let fixture: ComponentFixture<BaseErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
