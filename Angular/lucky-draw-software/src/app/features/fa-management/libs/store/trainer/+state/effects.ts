import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import { TrainerActions, ActionTypes, LoadedList } from './action';
import { TrainerService } from '@fa-management/services';
import { Trainer } from './reducer';

@Injectable()
export class Effects {
  loadRoles$ = createEffect(() =>
    this.action$.pipe(
      ofType(ActionTypes.LoadList),
      mergeMap(() => this.trainerService.getList<Trainer>().pipe(map((list) => new LoadedList(list))))
    )
  );

  constructor(private action$: Actions<TrainerActions>, private trainerService: TrainerService) {}
}
