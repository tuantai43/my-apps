import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, of } from 'rxjs';
import { ClassAdminActions, ActionTypes, LoadedList } from './admin.action';

@Injectable()
export class Effects {
  loadRoles$ = createEffect(() =>
    this.action$.pipe(
      ofType(ActionTypes.LoadList),
      concatMap(() =>
        of(
          new LoadedList([
            {
              id: 1,
              account: 'TaiPT3',
              name: 'Pham Tuan Tai',
            },
            {
              id: 2,
              account: 'HauNX',
              name: 'Nguyen Xuan Hau',
            },
            {
              id: 3,
              account: 'HuyPL1',
              name: 'Phan Le Huy',
            },
          ])
        )
      )
    )
  );

  constructor(private action$: Actions<ClassAdminActions>) {}
}
