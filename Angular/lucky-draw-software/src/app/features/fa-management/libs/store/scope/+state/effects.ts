import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import { ScopeActions, ActionTypes, LoadedList } from './action';
import { ScopeService } from '@fa-management/services';
import { Scope } from './reducer';
@Injectable()
export class Effects {
  loadList$ = createEffect(() =>
    this.action$.pipe(
      ofType(ActionTypes.LoadList),
      mergeMap(() => this.scopeService.getList<Scope>().pipe(map((list) => new LoadedList(list))))
    )
  );

  constructor(private action$: Actions<ScopeActions>, private scopeService: ScopeService) {}
}
