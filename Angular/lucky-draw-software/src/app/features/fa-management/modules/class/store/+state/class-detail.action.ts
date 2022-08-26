import { Action } from '@ngrx/store';
import { ClassDetails } from './class-detail.reducer';

export enum ClassDetailsActionTypes {
  LoadClass = '[ClassActionTypes] Load class details',
  LoadedClass = '[ClassActionTypes] Loaded class details',
  ResetClass = '[ClassActionTypes] Reset class details',
}

export class LoadClass implements Action {
  readonly type = ClassDetailsActionTypes.LoadClass;
}

export class LoadedClass implements Action {
  readonly type = ClassDetailsActionTypes.LoadedClass;
  constructor(public classDetails: ClassDetails) {}
}

export class ResetClass implements Action {
  readonly type = ClassDetailsActionTypes.ResetClass;
}

export type ClassActions = LoadClass | LoadedClass | ResetClass;
