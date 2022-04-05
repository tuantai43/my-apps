import {Component, Input, OnDestroy, TemplateRef} from '@angular/core';
import {debounceTime, Subject, takeUntil, timer} from 'rxjs';

@Component({
  selector: 'app-base-carousel',
  templateUrl: './base-carousel.component.html',
  styleUrls: ['./base-carousel.component.scss']
})
export class BaseCarouselComponent implements OnDestroy {
  @Input() source: any[] = [];
  @Input() itemTemplate: TemplateRef<any> | undefined;
  destroy$ = new Subject();
  currentIndex = 0;

  isPrevMoving = false;
  isNextMoving = false;

  get nextSlide(): number {
    const target = this.currentIndex + 1;
    return (target > this.source.length - 1 ? 0 : target);
  }

  get prevSlide(): number {
    const target = this.currentIndex - 1;
    return (target < 0 ? this.source.length - 1 : target);
  }

  goTo(target: number) {
    this.currentIndex = target;
  }

  handleClickNext() {
    this.isNextMoving = true;
    this.handleMoving(() => {
      this.isNextMoving = false;
      this.goTo(this.nextSlide);
    })
  }

  handleClickPrev() {
    this.isPrevMoving = true;
    this.handleMoving(() => {
      this.isPrevMoving = false;
      this.goTo(this.prevSlide);
    })
  }

  handleMoving(callback: Function) {
    timer(500)
      .pipe(
        debounceTime(700),
        takeUntil(this.destroy$))
      .subscribe(() => {
        callback();
      })
  }

  ngOnDestroy() {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
