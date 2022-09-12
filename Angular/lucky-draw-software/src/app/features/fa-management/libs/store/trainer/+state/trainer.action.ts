import { Action } from '@ngrx/store';
import { Trainer } from './trainer.reducer';

export enum ActionTypes {
  LoadList = '[TrainerActionTypes] Load list',
  LoadedList = '[TrainerActionTypes] Loaded list',
}

export class LoadList implements Action {
  readonly type = ActionTypes.LoadList;
}

export class LoadedList implements Action {
  readonly type = ActionTypes.LoadedList;
  constructor(public list: Trainer[]) {}
}

export type TrainerActions = LoadList | LoadedList;
