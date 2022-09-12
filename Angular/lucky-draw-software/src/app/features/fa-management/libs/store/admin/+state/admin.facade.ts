import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BaseFacade } from '../../+base';
import { LoadList } from './admin.action';
import { ClassAdmin, InitState } from './admin.reducer';
import { query } from './admin.selectors';

@Injectable()
export class ClassAdminFacade extends BaseFacade<InitState, ClassAdmin> {
  constructor(store: Store<InitState>) {
    super(store, store.select(query.getLoadedList), store.select(query.isLoadedList));
  }

  loadList() {
    this.getAll(new LoadList());
  }
}
