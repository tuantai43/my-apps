import { Action } from '@ngrx/store';
import { Location } from './location.reducer';

export enum ActionTypes {
  LoadList = '[LocationActionTypes] Load locations',
  LoadedList = '[LocationActionTypes] Loaded locations',
}

export class LoadList implements Action {
  readonly type = ActionTypes.LoadList;
}

export class LoadedList implements Action {
  readonly type = ActionTypes.LoadedList;
  constructor(public list: Location[]) {}
}

export type LocationActions = LoadList | LoadedList;
