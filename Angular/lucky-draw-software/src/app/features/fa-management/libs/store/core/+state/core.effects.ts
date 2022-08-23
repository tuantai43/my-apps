import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, of } from 'rxjs';
import { CoreActions, CoreActionTypes, LoadedRoles } from './core.action';
import { UserRole } from './core.reducer';

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
