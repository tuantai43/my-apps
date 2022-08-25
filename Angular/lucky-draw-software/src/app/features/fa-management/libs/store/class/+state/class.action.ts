import { Action } from '@ngrx/store';
import { Class, DataSearch } from './class.reducer';

export enum ClassActionTypes {
  LoadClass = '[ClassActionTypes] Load classes',
  LoadedClass = '[ClassActionTypes] Loaded classes',
  UpdateDataSearch = '[ClassActionTypes] Update data search',
}

export class LoadClass implements Action {
  readonly type = ClassActionTypes.LoadClass;
}

export class LoadedClass implements Action {
  readonly type = ClassActionTypes.LoadedClass;
  constructor(public classes: Class[]) {}
}

export class UpdateDataSearch implements Action {
  readonly type = ClassActionTypes.UpdateDataSearch;
  constructor(public dataSearch: DataSearch) {}
}

export type ClassActions = LoadClass | LoadedClass | UpdateDataSearch;
