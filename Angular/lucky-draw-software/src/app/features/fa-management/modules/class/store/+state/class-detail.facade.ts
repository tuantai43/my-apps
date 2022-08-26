import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadClass, ResetClass } from './class-detail.action';
import { ClassDetailsState } from './class-detail.reducer';
import { classQuery } from './class-detail.selectors';

@Injectable()
export class ClassDetailsFacade {
  class$ = this.store.select(classQuery.getLoadedClasses);
  isLoadedClass$ = this.store.select(classQuery.isLoadedClasses);

  constructor(private store: Store<ClassDetailsState>) {}

  loadedClass() {
    this.store.dispatch(new LoadClass());
  }

  resetClass() {
    this.store.dispatch(new ResetClass());
  }
}
