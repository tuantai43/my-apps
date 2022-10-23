import { TraineeDetail } from '@app/features/fa-management/libs/utils/models';
import { Action } from '@ngrx/store';

export enum TraineeDetailsActionTypes {
  LoadTrainee = '[TraineeActionTypes] Load trainee details',
  LoadedTrainee = '[TraineeActionTypes] Loaded trainee details',
}

export class LoadTrainee implements Action {
  readonly type = TraineeDetailsActionTypes.LoadTrainee;
  constructor(public empId: string) {};
}

export class LoadedTrainee implements Action {
  readonly type = TraineeDetailsActionTypes.LoadedTrainee;
  constructor(public traineeDetail: TraineeDetail) {}
}

export type TraineeActions = LoadTrainee | LoadedTrainee;