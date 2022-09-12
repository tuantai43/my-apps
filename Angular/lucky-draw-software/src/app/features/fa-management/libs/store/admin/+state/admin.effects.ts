import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map, mergeMap, of } from 'rxjs';
import { ClassAdminActions, ActionTypes, LoadedList } from './admin.action';
import { ClassAdminService } from '@fa-management/services';
import { ClassAdmin } from './admin.reducer';

@Injectable()
export class Effects {
  loadRoles$ = createEffect(() =>
    this.action$.pipe(
      ofType(ActionTypes.LoadList),
      mergeMap(() => this.classAdminService.getList<ClassAdmin>().pipe(map((list) => new LoadedList(list))))
    )
  );

  constructor(private action$: Actions<ClassAdminActions>, private classAdminService: ClassAdminService) {}
}
