import { Injectable } from '@angular/core';
import { TraineeDetail } from '@app/features/fa-management/libs/utils/models';
import { Store } from '@ngrx/store';
import { LoadTrainee, UpdateTrainee } from './trainee-detail.action';
import { TraineeDetailsState } from './trainee-detail.reducer';
import { traineeQuery } from './trainee-detail.selectors';

@Injectable()
export class TraineeDetailsFacade {
  trainee$ = this.store.select(traineeQuery.getLoadedTrainees);
  isLoadedTrainee$ = this.store.select(traineeQuery.isLoadedTrainees);
  isUpdatedTrainee$ = this.store.select(traineeQuery.isUpdate);

  constructor(private store: Store<TraineeDetailsState>) {}

  loadTrainee(emplId: string) {
    this.store.dispatch(new LoadTrainee(emplId));
  }

  update(emplId: string, traineeDetail: TraineeDetail): void {
    this.store.dispatch(new UpdateTrainee(emplId, traineeDetail));
  }
}
