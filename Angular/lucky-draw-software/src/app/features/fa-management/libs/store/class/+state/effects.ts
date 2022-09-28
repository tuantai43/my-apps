import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import { ClassActions, ActionTypes, LoadedList } from './action';
import { ClassService } from '@fa-management/services';
import { ClassView } from './reducer';

@Injectable()
export class Effects {
  loadRoles$ = createEffect(() =>
    this.action$.pipe(
      ofType(ActionTypes.LoadList),
      mergeMap(() => this.classService.getList<ClassView>().pipe(map((list) => new LoadedList(list))))
    )
  );

  constructor(private action$: Actions<ClassActions>, private classService: ClassService) {}
}
