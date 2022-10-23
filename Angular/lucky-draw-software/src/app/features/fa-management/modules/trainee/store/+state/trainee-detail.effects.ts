import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map, of } from 'rxjs';
import { TraineeActions, TraineeDetailsActionTypes, LoadedTrainee } from './trainee-detail.action';
import { TraineeDetailsService, TraineeService } from '@fa-management/services';
import { TraineeDetail } from '@app/features/fa-management/libs/utils/models';

@Injectable()
export class TraineeDetailsEffects {
  loadRole$ = createEffect(() => 
    this.action$.pipe(
      ofType(TraineeDetailsActionTypes.LoadTrainee),
      concatMap(({empId}) => {
        if (empId) {
          return this.traineeService.get<TraineeDetail>(empId).pipe(map((res) => new LoadedTrainee(res)));
        } else {
          return of(new LoadedTrainee({} as TraineeDetail));
        }
      })
    )
  );

  constructor(private action$: Actions<TraineeActions>, private traineeService: TraineeService<TraineeDetail>) {}
}