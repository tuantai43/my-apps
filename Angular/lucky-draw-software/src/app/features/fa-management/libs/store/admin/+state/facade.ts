import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BaseFacade } from '../../+base';
import { LoadList } from './action';
import { ClassAdmin, InitState } from './reducer';
import { query } from './selectors';

@Injectable()
export class ClassAdminFacade extends BaseFacade<InitState, ClassAdmin> {
  constructor(store: Store<InitState>) {
    super(store, store.select(query.getLoadedList), store.select(query.isLoadedList));
  }

  loadList() {
    this.getAll(new LoadList());
  }
}
