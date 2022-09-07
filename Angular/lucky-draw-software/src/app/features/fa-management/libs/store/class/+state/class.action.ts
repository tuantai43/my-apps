import { Action } from '@ngrx/store';
import { ClassView, DataSearch } from './class.reducer';

export enum ActionTypes {
  LoadList = '[ClassActionTypes] Load classes',
  LoadedList = '[ClassActionTypes] Loaded classes',
  UpdateDataSearch = '[ClassActionTypes] Update data search',
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

export type ClassActions = LoadList | LoadedList | UpdateDataSearch;
