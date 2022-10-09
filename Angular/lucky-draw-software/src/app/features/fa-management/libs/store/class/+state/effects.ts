import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import { ClassActions, ActionTypes, LoadedList, CanceledClasses } from './action';
import { ClassService } from '@fa-management/services';
import { ClassView } from './reducer';

@Injectable()
export class Effects {
  loadList$ = createEffect(() =>
    this.action$.pipe(
      ofType(ActionTypes.LoadList),
      mergeMap(() => this.classService.getList().pipe(map((list) => new LoadedList(list))))
    )
  );

  cancelClasses$ = createEffect(() =>
    this.action$.pipe(
      ofType(ActionTypes.CancelClasses),
      mergeMap(({ ids }) => this.classService.cancel(ids).pipe(map(() => new CanceledClasses())))
    )
  );

  constructor(private action$: Actions<ClassActions>, private classService: ClassService<ClassView>) {}
}
