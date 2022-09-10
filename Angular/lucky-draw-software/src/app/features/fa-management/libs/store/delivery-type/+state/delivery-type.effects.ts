import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import { DeliveryTypeActions, ActionTypes, LoadedList } from './delivery-type.action';
import { DeliveryTypeService } from '@fa-management/services';
import { DeliveryType } from './delivery-type.reducer';
@Injectable()
export class Effects {
  loadList$ = createEffect(() =>
    this.action$.pipe(
      ofType(ActionTypes.LoadList),
      mergeMap(() => this.deliveryTypeService.getList<DeliveryType>().pipe(map((list) => new LoadedList(list))))
    )
  );

  constructor(private action$: Actions<DeliveryTypeActions>, private deliveryTypeService: DeliveryTypeService) {}
}
