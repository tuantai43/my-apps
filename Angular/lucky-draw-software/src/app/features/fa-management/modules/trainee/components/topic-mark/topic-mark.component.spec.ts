import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicMarkComponent } from './topic-mark.component';

describe('TopicMarkComponent', () => {
  let component: TopicMarkComponent;
  let fixture: ComponentFixture<TopicMarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicMarkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
