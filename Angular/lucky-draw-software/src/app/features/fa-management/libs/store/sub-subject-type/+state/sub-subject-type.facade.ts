import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BaseFacade } from '../../+base';
import { LoadList } from './sub-subject-type.action';
import { InitState, SubSubjectType } from './sub-subject-type.reducer';
import { query } from './sub-subject-type.selectors';

@Injectable()
export class SubSubjectTypeFacade extends BaseFacade<InitState, SubSubjectType> {
  constructor(store: Store<InitState>) {
    super(store, store.select(query.getLoadedList), store.select(query.isLoadedList));
  }

  loadList() {
    this.getAll(new LoadList());
  }
}
