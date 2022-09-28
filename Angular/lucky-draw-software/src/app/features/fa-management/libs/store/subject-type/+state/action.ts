import { Action } from '@ngrx/store';
import { SubjectType } from './reducer';

export enum ActionTypes {
  LoadList = '[SubjectTypeActionTypes] Load list',
  LoadedList = '[SubjectTypeActionTypes] Loaded list',
}

export class LoadList implements Action {
  readonly type = ActionTypes.LoadList;
}

export class LoadedList implements Action {
  readonly type = ActionTypes.LoadedList;
  constructor(public list: SubjectType[]) {}
}

export type SubjectTypeActions = LoadList | LoadedList;
