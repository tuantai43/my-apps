import { Action } from '@ngrx/store';
import { SubSubjectType } from './reducer';

export enum ActionTypes {
  LoadList = '[SubSubjectTypeActionTypes] Load list',
  LoadedList = '[SubSubjectTypeActionTypes] Loaded list',
}

export class LoadList implements Action {
  readonly type = ActionTypes.LoadList;
}

export class LoadedList implements Action {
  readonly type = ActionTypes.LoadedList;
  constructor(public list: SubSubjectType[]) {}
}

export type SubSubjectTypeActions = LoadList | LoadedList;
