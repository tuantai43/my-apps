import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BaseFacade } from '../../+base';
import { LoadList, UpdateDataSearch } from './action';
import { InitState, DataSearch, ClassView } from './reducer';
import { classQuery } from './selectors';

@Injectable()
export class ClassFacade extends BaseFacade<InitState, ClassView> {
  statuses$ = this.store.select(classQuery.getStatuses);
  classNames$ = this.store.select(classQuery.getClassNames);

  constructor(store: Store<InitState>) {
    super(store, store.select(classQuery.getLoadedList), store.select(classQuery.isLoadedList));
  }

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
