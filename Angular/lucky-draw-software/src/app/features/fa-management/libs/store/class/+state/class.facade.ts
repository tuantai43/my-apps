import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadClass } from './class.action';
import { ClassState } from './class.reducer';
import { classQuery } from './class.selectors';

@Injectable()
export class ClassFacade {
  classes$ = this.store.select(classQuery.getLoadedClasses);
  isLoadedClasses$ = this.store.select(classQuery.isLoadedClasses);

  constructor(private store: Store<ClassState>) {
    this.loadedClass();
  }

  loadedClass() {
    this.store.dispatch(new LoadClass());
  }
}
