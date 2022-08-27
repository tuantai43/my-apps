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
              acronym: 'HN',
              name: 'location.HN',
            },
            {
              id: 2,
              acronym: 'DN',
              name: 'location.DN',
            },
            {
              id: 3,
              acronym: 'QN',
              name: 'location.QN',
            },
            {
              id: 4,
              acronym: 'HCM',
              name: 'location.HCM',
            },
            {
              id: 5,
              acronym: 'CT',
              name: 'location.CT',
            },
          ])
        )
      )
    )
  );

  constructor(private action$: Actions<LocationActions>) {}
}
