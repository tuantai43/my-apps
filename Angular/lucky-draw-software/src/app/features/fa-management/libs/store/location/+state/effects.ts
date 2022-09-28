import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import { LocationActions, ActionTypes, LoadedList } from './action';
import { LocationView } from './reducer';
import { LocationService } from '@fa-management/services';

@Injectable()
export class Effects {
  loadRoles$ = createEffect(() =>
    this.action$.pipe(
      ofType(ActionTypes.LoadList),
      mergeMap(() => this.locationService.getList<LocationView>().pipe(map((list) => new LoadedList(list))))
    )
  );

  constructor(private action$: Actions<LocationActions>, private locationService: LocationService) {}
}
