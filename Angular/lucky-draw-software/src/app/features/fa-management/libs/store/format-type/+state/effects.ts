import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import { FormatTypeActions, ActionTypes, LoadedList } from './action';
import { FormatTypeService } from '@fa-management/services';
import { FormatType } from './reducer';
@Injectable()
export class Effects {
  loadList$ = createEffect(() =>
    this.action$.pipe(
      ofType(ActionTypes.LoadList),
      mergeMap(() => this.formatTypeService.getList<FormatType>().pipe(map((list) => new LoadedList(list))))
    )
  );

  constructor(private action$: Actions<FormatTypeActions>, private formatTypeService: FormatTypeService) {}
}
