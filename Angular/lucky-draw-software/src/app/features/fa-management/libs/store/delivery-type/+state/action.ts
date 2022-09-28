import { Action } from '@ngrx/store';
import { DeliveryType } from './reducer';

export enum ActionTypes {
  LoadList = '[DeliveryTypeActionTypes] Load list',
  LoadedList = '[DeliveryTypeActionTypes] Loaded list',
}

export class LoadList implements Action {
  readonly type = ActionTypes.LoadList;
}

export class LoadedList implements Action {
  readonly type = ActionTypes.LoadedList;
  constructor(public list: DeliveryType[]) {}
}

export type DeliveryTypeActions = LoadList | LoadedList;
