import { Action } from '@ngrx/store';
import { ClassAdmin } from './reducer';

export enum ActionTypes {
  LoadList = '[AdminActionTypes] Load list',
  LoadedList = '[AdminActionTypes] Loaded list',
}

export class LoadList implements Action {
  readonly type = ActionTypes.LoadList;
}

export class LoadedList implements Action {
  readonly type = ActionTypes.LoadedList;
  constructor(public list: ClassAdmin[]) {}
}

export type ClassAdminActions = LoadList | LoadedList;
