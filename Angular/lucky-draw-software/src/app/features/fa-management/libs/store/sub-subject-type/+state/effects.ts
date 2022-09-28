import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import { SubSubjectTypeActions, ActionTypes, LoadedList } from './action';
import { SubSubjectTypeService } from '@fa-management/services';
import { SubSubjectType } from './reducer';
@Injectable()
export class Effects {
  loadList$ = createEffect(() =>
    this.action$.pipe(
      ofType(ActionTypes.LoadList),
      mergeMap(() => this.subSubjectTypeService.getList<SubSubjectType>().pipe(map((list) => new LoadedList(list))))
    )
  );

  constructor(private action$: Actions<SubSubjectTypeActions>, private subSubjectTypeService: SubSubjectTypeService) {}
}
