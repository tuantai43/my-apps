import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { DeleteTrainee, LoadList, UpdateDataSearch } from './trainee.action';
import { InitState, DataSearch } from './trainee.reducer';
import { traineeQuery } from './trainee.selectors';
// import { traineeQuery } from './trainee.selectors';

@Injectable()
export class TraineeFacade {
  list$ = this.store.select(traineeQuery.getLoadedTrainees);
  acount$ = this.store.select(traineeQuery.getLoadedTrainees);
  isLoadedList$ = this.store.select(traineeQuery.isLoadedTrainees);

  constructor(private store: Store<InitState>) {}

  loadList() {
    this.store.dispatch(new LoadList());
  }

  updateDataSearch(dataSearch: DataSearch) {
    this.store.dispatch(new UpdateDataSearch(dataSearch));
  }

  resetSearch() {
    this.store.dispatch(
      new UpdateDataSearch({
        emplId: '',
        account: '',
        name: '',
        dob: '',
        phone: '',
        email: '',
      })
    );
  }

  delete(emplId: string): void {
    this.store.dispatch(new DeleteTrainee(emplId));
  }
}
