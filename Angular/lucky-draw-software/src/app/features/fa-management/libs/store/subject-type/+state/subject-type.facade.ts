import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BaseFacade } from '../../+base';
import { LoadList } from './subject-type.action';
import { InitState, SubjectType } from './subject-type.reducer';
import { query } from './subject-type.selectors';

@Injectable()
export class SubjectTypeFacade extends BaseFacade<InitState, SubjectType> {
  constructor(store: Store<InitState>) {
    super(store, store.select(query.getLoadedList), store.select(query.isLoadedList));
  }

  loadList() {
    this.getAll(new LoadList());
  }
}
