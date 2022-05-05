import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({ template: '' })
export abstract class BaseComponent implements OnDestroy {
  destroy$ = new Subject();
  isLoading = false;

  ngOnDestroy() {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
