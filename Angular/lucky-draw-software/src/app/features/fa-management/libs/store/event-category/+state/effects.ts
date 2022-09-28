import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import { EventCategoryActions, ActionTypes, LoadedList } from './action';
import { EventCategoryService } from '@fa-management/services';
import { EventCategory } from './reducer';

@Injectable()
export class Effects {
  loadRoles$ = createEffect(() =>
    this.action$.pipe(
      ofType(ActionTypes.LoadList),
      mergeMap(() => this.service.getList<EventCategory>().pipe(map((list) => new LoadedList(list))))
    )
  );

  constructor(private action$: Actions<EventCategoryActions>, private service: EventCategoryService) {}
}
