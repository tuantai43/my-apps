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
              id: 'HN_FR',
              name: 'ABC',
              startDate: 'start',
              endDate: 'end',
              location: 'loca',
              status: 'sta',
            },
            {
              id: 'HN_FR',
              name: 'ABC',
              startDate: 'start',
              endDate: 'end',
              location: 'loca',
              status: 'sta',
            },
            {
              id: 'HN_FR',
              name: 'ABC',
              startDate: 'start',
              endDate: 'end',
              location: 'loca',
              status: 'sta',
            },
            {
              id: 'HN_FR',
              name: 'ABC',
              startDate: 'start',
              endDate: 'end',
              location: 'loca',
              status: 'sta',
            },
            {
              id: 'HN_FR',
              name: 'ABC',
              startDate: 'start',
              endDate: 'end',
              location: 'loca',
              status: 'sta',
            },
            {
              id: 'HN_FR',
              name: 'ABC',
              startDate: 'start',
              endDate: 'end',
              location: 'loca',
              status: 'sta',
            },
            {
              id: 'HN_FR',
              name: 'ABC',
              startDate: 'start',
              endDate: 'end',
              location: 'loca',
              status: 'sta',
            },
          ])
        )
      )
    )
  );

  constructor(private action$: Actions<ClassActions>) {}
}
