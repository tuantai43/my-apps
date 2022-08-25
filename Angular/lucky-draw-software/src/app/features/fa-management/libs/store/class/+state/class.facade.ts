import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadClass, UpdateDataSearch } from './class.action';
import { ClassState, DataSearch } from './class.reducer';
import { classQuery } from './class.selectors';

@Injectable()
export class ClassFacade {
  classes$ = this.store.select(classQuery.getLoadedClasses);
  statuses$ = this.store.select(classQuery.getStatuses);
  classNames$ = this.store.select(classQuery.getClassNames);
  isLoadedClasses$ = this.store.select(classQuery.isLoadedClasses);

  constructor(private store: Store<ClassState>) {}

  loadedClass() {
    this.store.dispatch(new LoadClass());
  }

  updateDataSearch(dataSearch: DataSearch) {
    this.store.dispatch(new UpdateDataSearch(dataSearch));
  }

  resetSearch() {
    this.store.dispatch(
      new UpdateDataSearch({
        className: '',
        status: 0,
        location: 0,
      })
    );
  }
}
