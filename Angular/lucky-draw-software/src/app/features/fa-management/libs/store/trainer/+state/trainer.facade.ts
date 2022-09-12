import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BaseFacade } from '../../+base';
import { LoadList } from './trainer.action';
import { InitState, Trainer } from './trainer.reducer';
import { query } from './trainer.selectors';

@Injectable()
export class TrainerFacade extends BaseFacade<InitState, Trainer> {
  constructor(store: Store<InitState>) {
    super(store, store.select(query.getLoadedList), store.select(query.isLoadedList));
  }

  loadList() {
    this.getAll(new LoadList());
  }
}
