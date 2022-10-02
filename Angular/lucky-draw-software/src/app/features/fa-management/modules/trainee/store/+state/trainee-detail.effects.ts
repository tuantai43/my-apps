import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map } from 'rxjs';
import { TraineeActions, TraineeDetailsActionTypes, LoadedTrainee } from './trainee-detail.action';
import { TraineeDetailsService } from '@fa-management/services';

@Injectable()
export class TraineeDetailsEffects {
  loadRoles$ = createEffect(() =>
    this.action$.pipe(
      ofType(TraineeDetailsActionTypes.LoadTrainee),
      concatMap(() => this.traineeDetailsService.getDetailTrainee(2).pipe(map((detail) => new LoadedTrainee(detail))))
    )
  );

  constructor(private action$: Actions<TraineeActions>, private traineeDetailsService: TraineeDetailsService) {}
}
