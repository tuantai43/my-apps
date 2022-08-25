import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, of } from 'rxjs';
import { LocationActions, LocationActionTypes, LoadedLocation } from './location.action';

@Injectable()
export class LocationEffects {
  loadRoles$ = createEffect(() =>
    this.action$.pipe(
      ofType(LocationActionTypes.LoadLocation),
      concatMap(() =>
        of(
          new LoadedLocation([
            {
              id: 1,
              name: 'location.HN',
            },
            {
              id: 2,
              name: 'location.DN',
            },
            {
              id: 3,
              name: 'location.QN',
            },
            {
              id: 4,
              name: 'location.HCM',
            },
            {
              id: 5,
              name: 'location.CT',
            },
          ])
        )
      )
    )
  );

  constructor(private action$: Actions<LocationActions>) {}
}
