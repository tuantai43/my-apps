import { Action } from '@ngrx/store';
import { FormatType } from './reducer';

export enum ActionTypes {
  LoadList = '[FormatTypeActionTypes] Load list',
  LoadedList = '[FormatTypeActionTypes] Loaded list',
}

export class LoadList implements Action {
  readonly type = ActionTypes.LoadList;
}

export class LoadedList implements Action {
  readonly type = ActionTypes.LoadedList;
  constructor(public list: FormatType[]) {}
}

export type FormatTypeActions = LoadList | LoadedList;
