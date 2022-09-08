import { Action } from '@ngrx/store';
import { TraineeDetails } from './trainee-detail.reducer';

export enum TraineeDetailsActionTypes {
  LoadTrainee = '[TraineeActionTypes] Load trainee details',
  LoadedTrainee = '[TraineeActionTypes] Loaded trainee details',
}

export class LoadTrainee implements Action {
  readonly type = TraineeDetailsActionTypes.LoadTrainee;
}

export class LoadedTrainee implements Action {
  readonly type = TraineeDetailsActionTypes.LoadedTrainee;
  constructor(public traineeDetails: TraineeDetails) {}
}

export type TraineeActions = LoadTrainee | LoadedTrainee;