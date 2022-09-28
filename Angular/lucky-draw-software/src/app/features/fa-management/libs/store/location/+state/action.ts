import { Action } from '@ngrx/store';
import { LocationView } from './reducer';

export enum ActionTypes {
  LoadList = '[LocationActionTypes] Load locations',
  LoadedList = '[LocationActionTypes] Loaded locations',
}

export class LoadList implements Action {
  readonly type = ActionTypes.LoadList;
}

export class LoadedList implements Action {
  readonly type = ActionTypes.LoadedList;
  constructor(public list: LocationView[]) {}
}

export type LocationActions = LoadList | LoadedList;
