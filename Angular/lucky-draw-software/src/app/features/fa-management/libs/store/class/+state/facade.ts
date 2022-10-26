import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BaseFacade } from '../../+base';
import { CancelClasses, LoadList, UpdateDataSearch } from './action';
import { InitState, DataSearch, ClassView } from './reducer';
import { classQuery } from './selectors';

@Injectable()
export class ClassFacade extends BaseFacade<InitState, ClassView> {
  statuses$ = this.store.select(classQuery.getStatuses);
  classNames$ = this.store.select(classQuery.getClassNames);
  cancelling$ = this.store.select(classQuery.cancelling);

  constructor(store: Store<InitState>) {
    super(store, store.select(classQuery.getLoadedList), store.select(classQuery.isLoadedList));
  }

  loadList(): void {
    this.store.dispatch(new LoadList());
  }

  updateDataSearch(dataSearch: DataSearch): void {
    this.store.dispatch(new UpdateDataSearch(dataSearch));
  }

  resetSearch(): void {
    this.store.dispatch(
      new UpdateDataSearch({
        className: '',
        status: 0,
        location: '',
      })
    );
  }

  cancel(ids: string[]): void {
    this.store.dispatch(new CancelClasses(ids));
  }
}
