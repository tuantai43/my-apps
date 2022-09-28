import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import { BudgetActions, ActionTypes, LoadedList } from './action';
import { BudgetService } from '@fa-management/services';
import { Budget } from './reducer';
@Injectable()
export class Effects {
  loadRoles$ = createEffect(() =>
    this.action$.pipe(
      ofType(ActionTypes.LoadList),
      mergeMap(() => this.budgetService.getList<Budget>().pipe(map((list) => new LoadedList(list))))
    )
  );

  constructor(private action$: Actions<BudgetActions>, private budgetService: BudgetService) {}
}
