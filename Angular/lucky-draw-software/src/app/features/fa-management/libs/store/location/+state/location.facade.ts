import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BaseFacade } from '../../+base';
import { LoadList } from './location.action';
import { InitState, LocationView } from './location.reducer';
import { query } from './location.selectors';

@Injectable()
export class LocationFacade extends BaseFacade<InitState, LocationView> {
  constructor(store: Store<InitState>) {
    super(store, store.select(query.getList), store.select(query.isLoadedList));
    this.loadList();
  }

  loadList() {
    this.getAll(new LoadList());
  }

  findById(id: number) {
    return this.findBy('id', id);
  }
}
