import { Action } from '@ngrx/store';
import { Class } from './class.reducer';

export enum ClassActionTypes {
  LoadClass = '[ClassActionTypes] Load classes',
  LoadedClass = '[ClassActionTypes] Loaded classes',
}

export class LoadClass implements Action {
  readonly type = ClassActionTypes.LoadClass;
}

export class LoadedClass implements Action {
  readonly type = ClassActionTypes.LoadedClass;
  constructor(public classes: Class[]) {}
}

export type ClassActions = LoadClass | LoadedClass;
