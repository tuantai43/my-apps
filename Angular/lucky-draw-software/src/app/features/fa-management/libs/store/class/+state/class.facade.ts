import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadList, UpdateDataSearch } from './class.action';
import { InitState, DataSearch } from './class.reducer';
import { classQuery } from './class.selectors';

@Injectable()
export class ClassFacade {
  list$ = this.store.select(classQuery.getLoadedList);
  statuses$ = this.store.select(classQuery.getStatuses);
  classNames$ = this.store.select(classQuery.getClassNames);
  isLoadedList$ = this.store.select(classQuery.isLoadedList);

  constructor(private store: Store<InitState>) {}

  loadList() {
    this.store.dispatch(new LoadList());
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
