import { Action } from '@ngrx/store';
import { ClassDetails } from './class-detail.reducer';

export enum ClassDetailsActionTypes {
  LoadClass = '[ClassActionTypes] Load class details',
  LoadedClass = '[ClassActionTypes] Loaded class details',
  ResetClass = '[ClassActionTypes] Reset class details',
  CreateClass = '[ClassActionTypes] Create a new class',
  CreatedClass = '[ClassActionTypes] Created the new class',
  UpdateClass = '[ClassActionTypes] Update the class',
  UpdatedClass = '[ClassActionTypes] Updated the class',
}

export class LoadClass implements Action {
  readonly type = ClassDetailsActionTypes.LoadClass;
  constructor(public id: string) {}
}

export class LoadedClass implements Action {
  readonly type = ClassDetailsActionTypes.LoadedClass;
  constructor(public classDetails: ClassDetails) {}
}

export class ResetClass implements Action {
  readonly type = ClassDetailsActionTypes.ResetClass;
}

export class CreateClass implements Action {
  readonly type = ClassDetailsActionTypes.CreateClass;
  constructor(public classDetails: ClassDetails) {}
}

export class CreatedClass implements Action {
  readonly type = ClassDetailsActionTypes.CreatedClass;
}

export class UpdateClass implements Action {
  readonly type = ClassDetailsActionTypes.UpdateClass;
  constructor(public id: string, public classDetails: ClassDetails) {}
}

export class UpdatedClass implements Action {
  readonly type = ClassDetailsActionTypes.UpdatedClass;
}

export type ClassActions =
  | LoadClass
  | LoadedClass
  | ResetClass
  | CreateClass
  | CreatedClass
  | UpdateClass
  | UpdatedClass;
