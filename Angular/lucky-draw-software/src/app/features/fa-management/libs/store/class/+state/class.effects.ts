import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, of } from 'rxjs';
import { ClassActions, ClassActionTypes, LoadedClass } from './class.action';

@Injectable()
export class ClassEffects {
  loadRoles$ = createEffect(() =>
    this.action$.pipe(
      ofType(ClassActionTypes.LoadClass),
      concatMap(() =>
        of(
          new LoadedClass([
            {
              id: 1,
              code: 'HN_FR',
              name: 'ABC',
              startDate: 'start',
              endDate: 'end',
              location: 1,
              status: 1,
            },
            {
              id: 2,
              code: 'HN_FR',
              name: 'ABC',
              startDate: 'start',
              endDate: 'end',
              location: 1,
              status: 1,
            },
            {
              id: 3,
              code: 'HN_FR',
              name: 'ABC',
              startDate: 'start',
              endDate: 'end',
              location: 2,
              status: 2,
            },
            {
              id: 4,
              code: 'HN_FR',
              name: 'ABC',
              startDate: 'start',
              endDate: 'end',
              location: 2,
              status: 3,
            },
            {
              id: 5,
              code: 'HN_FR',
              name: 'ABC',
              startDate: 'start',
              endDate: 'end',
              location: 2,
              status: 4,
            },
            {
              id: 6,
              code: 'HN_FR',
              name: 'ABC',
              startDate: 'start',
              endDate: 'end',
              location: 3,
              status: 4,
            },
            {
              id: 7,
              code: 'HN_FR',
              name: 'ABC',
              startDate: 'start',
              endDate: 'end',
              location: 4,
              status: 1,
            },
          ])
        )
      )
    )
  );

  constructor(private action$: Actions<ClassActions>) {}
}
