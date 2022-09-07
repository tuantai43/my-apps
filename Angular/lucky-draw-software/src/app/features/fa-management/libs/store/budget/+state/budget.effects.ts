import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, of } from 'rxjs';
import { BudgetActions, ActionTypes, LoadedList } from './budget.action';

@Injectable()
export class effects {
  loadRoles$ = createEffect(() =>
    this.action$.pipe(
      ofType(ActionTypes.LoadList),
      concatMap(() =>
        of(
          new LoadedList([
            {
              id: 1,
              name: 'CTC_Project_ADP',
            },
            {
              id: 2,
              name: 'CTC_Fresher_Allowance',
            },
            {
              id: 3,
              name: 'CTC_Fresher_Training',
            },
            {
              id: 4,
              name: 'CTC_Specific_Fresher_Allowance',
            },
            {
              id: 5,
              name: 'CTC_Specific_Fresher_Training',
            },
            {
              id: 6,
              name: 'CTC_Specific_Fresher_Training_Award',
            },
            {
              id: 7,
              name: 'CTC_FU',
            },
            {
              id: 8,
              name: 'CTC_Uni',
            },
          ])
        )
      )
    )
  );

  constructor(private action$: Actions<BudgetActions>) {}
}
