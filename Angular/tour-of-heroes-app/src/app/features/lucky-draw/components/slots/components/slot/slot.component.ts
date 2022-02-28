import {Component, Input, OnDestroy} from '@angular/core';
import {interval, Subject, Subscription, takeUntil} from 'rxjs';

@Component({
  selector: 'app-slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.scss']
})
export class SlotComponent implements OnDestroy {
  subscribe = new Subscription();
  _toggleRandom = false;

  @Input()
  get toggleRandom(): boolean {
    return this._toggleRandom
  }

  set toggleRandom(value) {
    this._toggleRandom = value;
    if (value) {
      this.runRandomAnimation();
    } else {
      this.subscribe.unsubscribe();
    }
  }

  destroyed$ = new Subject();

  n: number = 0;

  runRandomAnimation() {
    this.subscribe = interval(100)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => {
        this.n = Math.floor(Math.random() * 10);
      })
  }

  ngOnDestroy() {
    this.destroyed$.next(null);
    this.destroyed$.complete();
  }
}
