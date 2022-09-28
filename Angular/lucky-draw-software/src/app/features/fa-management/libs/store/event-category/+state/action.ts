import { Action } from '@ngrx/store';
import { EventCategory } from './reducer';

export enum ActionTypes {
  LoadList = '[EventCategoryActionTypes] Load list',
  LoadedList = '[EventCategoryActionTypes] Loaded list',
}

export class LoadList implements Action {
  readonly type = ActionTypes.LoadList;
}

export class LoadedList implements Action {
  readonly type = ActionTypes.LoadedList;
  constructor(public list: EventCategory[]) {}
}

export type EventCategoryActions = LoadList | LoadedList;
