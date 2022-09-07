import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs';
import { LoadList } from './budget.action';
import { InitState } from './budget.reducer';
import { query } from './budget.selectors';

@Injectable()
export class BudgetFacade {
  list$ = this.store.select(query.getLoadedList);
  isLoadedList$ = this.store.select(query.isLoadedList);

  constructor(private store: Store<InitState>) {}

  loadList() {
    this.isLoadedList$
      .pipe(filter((loaded) => !loaded))
      .subscribe(() => this.store.dispatch(new LoadList()))
      .unsubscribe();
  }
}
