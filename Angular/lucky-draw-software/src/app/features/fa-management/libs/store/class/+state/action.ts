import { Action } from '@ngrx/store';
import { ClassView, DataSearch } from './reducer';

export enum ActionTypes {
  LoadList = '[ClassActionTypes] Load classes',
  LoadedList = '[ClassActionTypes] Loaded classes',
  UpdateDataSearch = '[ClassActionTypes] Update data search',
  CancelClasses = '[ClassActionTypes] Cancel classes',
  CanceledClasses = '[ClassActionTypes] Canceled classes',
}

export class LoadList implements Action {
  readonly type = ActionTypes.LoadList;
}

export class LoadedList implements Action {
  readonly type = ActionTypes.LoadedList;
  constructor(public list: ClassView[]) {}
}

export class UpdateDataSearch implements Action {
  readonly type = ActionTypes.UpdateDataSearch;
  constructor(public dataSearch: DataSearch) {}
}

export class CancelClasses implements Action {
  readonly type = ActionTypes.CancelClasses;
  constructor(public ids: string[]) {}
}

export class CanceledClasses implements Action {
  readonly type = ActionTypes.CanceledClasses;
  constructor() {}
}

export type ClassActions = LoadList | LoadedList | UpdateDataSearch | CancelClasses | CanceledClasses;
