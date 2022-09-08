import { Action } from '@ngrx/store';
import { TraineeView, DataSearch } from './trainee.reducer';

export enum ActionTypes {
  LoadList = '[TraineeActionTypes] Load Trainees',
  LoadedList = '[TraineeActionTypes] Loaded Trainees',
  UpdateDataSearch = '[TraineeActionTypes] Update data search',
}

export class LoadList implements Action {
  readonly type = ActionTypes.LoadList;
}

export class LoadedList implements Action {
  readonly type = ActionTypes.LoadedList;
  constructor(public list: TraineeView[]) {}
}

export class UpdateDataSearch implements Action {
  readonly type = ActionTypes.UpdateDataSearch;
  constructor(public dataSearch: DataSearch) {}
}

export type TraineeActions = LoadList | LoadedList | UpdateDataSearch;
