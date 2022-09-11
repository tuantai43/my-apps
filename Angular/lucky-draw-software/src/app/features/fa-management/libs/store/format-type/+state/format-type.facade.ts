import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BaseFacade } from '../../+base';
import { LoadList } from './format-type.action';
import { InitState, FormatType } from './format-type.reducer';
import { query } from './format-type.selectors';

@Injectable()
export class FormatTypeFacade extends BaseFacade<InitState, FormatType> {
  constructor(store: Store<InitState>) {
    super(store, store.select(query.getLoadedList), store.select(query.isLoadedList));
  }

  loadList() {
    this.getAll(new LoadList());
  }
}
