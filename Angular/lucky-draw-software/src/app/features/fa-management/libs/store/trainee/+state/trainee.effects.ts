import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map, mergeMap } from 'rxjs';
import { TraineeActions, ActionTypes, LoadedList } from './trainee.action';
import { TraineeView } from './trainee.reducer';
import { TraineeService } from '@fa-management/services';
import { TraineeDetail } from '../../../utils/models';

@Injectable()
export class Effects {
  loadRoles$ = createEffect(() =>
    this.action$.pipe(
      ofType(ActionTypes.LoadList),
      mergeMap(() => this.traineeService.getList<TraineeView>().pipe(map((list) => new LoadedList(list))))
    )
  );

  constructor(private action$: Actions<TraineeActions>, private traineeService: TraineeService<TraineeView[]>) {}
}
