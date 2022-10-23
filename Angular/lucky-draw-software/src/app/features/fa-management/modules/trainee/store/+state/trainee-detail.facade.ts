import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadTrainee } from './trainee-detail.action';
import { TraineeDetailsState } from './trainee-detail.reducer';
import { traineeQuery } from './trainee-detail.selectors';

@Injectable()
export class TraineeDetailsFacade {
  trainee$ = this.store.select(traineeQuery.getLoadedTrainees);
  isLoadedTrainee$ = this.store.select(traineeQuery.isLoadedTrainees);

  constructor(private store: Store<TraineeDetailsState>) {}

  loadTrainee(emplId: string) {
    this.store.dispatch(new LoadTrainee(emplId));
  }
}
