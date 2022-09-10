import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BaseFacade } from '../../+base';
import { LoadList } from './delivery-type.action';
import { InitState, DeliveryType } from './delivery-type.reducer';
import { query } from './delivery-type.selectors';

@Injectable()
export class DeliveryTypeFacade extends BaseFacade<InitState, DeliveryType> {
  constructor(store: Store<InitState>) {
    super(store, store.select(query.getLoadedList), store.select(query.isLoadedList));
  }

  loadList() {
    this.getAll(new LoadList());
  }
}
