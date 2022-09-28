import { Action } from '@ngrx/store';
import { Scope } from './reducer';

export enum ActionTypes {
  LoadList = '[FormatTypeActionTypes] Load list',
  LoadedList = '[ScopeActionTypes] Loaded list',
}

export class LoadList implements Action {
  readonly type = ActionTypes.LoadList;
}

export class LoadedList implements Action {
  readonly type = ActionTypes.LoadedList;
  constructor(public list: Scope[]) {}
}

export type ScopeActions = LoadList | LoadedList;
