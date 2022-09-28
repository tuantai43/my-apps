import { Action } from '@ngrx/store';
import { Budget } from './reducer';

export enum ActionTypes {
  LoadList = '[BudgetActionTypes] Load list',
  LoadedList = '[BudgetActionTypes] Loaded list',
}

export class LoadList implements Action {
  readonly type = ActionTypes.LoadList;
}

export class LoadedList implements Action {
  readonly type = ActionTypes.LoadedList;
  constructor(public list: Budget[]) {}
}

export type BudgetActions = LoadList | LoadedList;
