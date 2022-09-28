import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BaseFacade } from '../../+base';
import { LoadList } from './action';
import { InitState, EventCategory } from './reducer';
import { query } from './selectors';

@Injectable()
export class EventCategoryFacade extends BaseFacade<InitState, EventCategory> {
  constructor(store: Store<InitState>) {
    super(store, store.select(query.getLoadedList), store.select(query.isLoadedList));
  }

  loadList() {
    this.getAll(new LoadList());
  }
}
