import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, of } from 'rxjs';
import { CoreActions, CoreActionTypes, LoadedRoles } from './action';
import { UserRole } from './reducer';

@Injectable()
export class CoreEffects {
  loadRoles$ = createEffect(() =>
    this.action$.pipe(
      ofType(CoreActionTypes.LoadRoles),
      concatMap(() => of(new LoadedRoles([UserRole.SystemAdmin])))
    )
  );

  constructor(private action$: Actions<CoreActions>) {}
}
