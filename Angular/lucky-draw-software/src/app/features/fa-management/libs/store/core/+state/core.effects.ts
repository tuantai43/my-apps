import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';
import { CoreActions, CoreActionTypes } from './core.action';

@Injectable()
export class CoreEffects {
  loadRoles$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(CoreActionTypes.LoadRoles),
        tap((value) => {
          console.log('abc', value);
        })
      ),
    { dispatch: false }
  );

  constructor(private action$: Actions<CoreActions>) {}
}
