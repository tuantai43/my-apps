import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import { SubjectTypeActions, ActionTypes, LoadedList } from './action';
import { SubjectTypeService } from '@fa-management/services';
import { SubjectType } from './reducer';
@Injectable()
export class Effects {
  loadList$ = createEffect(() =>
    this.action$.pipe(
      ofType(ActionTypes.LoadList),
      mergeMap(() => this.subjectTypeService.getList<SubjectType>().pipe(map((list) => new LoadedList(list))))
    )
  );

  constructor(private action$: Actions<SubjectTypeActions>, private subjectTypeService: SubjectTypeService) {}
}
