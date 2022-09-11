import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BaseFacade } from '../../+base';
import { LoadList } from './scope.action';
import { InitState, Scope } from './scope.reducer';
import { query } from './scope.selectors';

@Injectable()
export class ScopeFacade extends BaseFacade<InitState, Scope> {
  constructor(store: Store<InitState>) {
    super(store, store.select(query.getLoadedList), store.select(query.isLoadedList));
  }

  loadList() {
    this.getAll(new LoadList());
  }
}
