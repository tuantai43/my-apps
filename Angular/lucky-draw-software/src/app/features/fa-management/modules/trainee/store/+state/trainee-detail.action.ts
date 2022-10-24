import { TraineeDetail } from '@app/features/fa-management/libs/utils/models';
import { Action } from '@ngrx/store';

export enum TraineeDetailsActionTypes {
  LoadTrainee = '[TraineeActionTypes] Load trainee details',
  LoadedTrainee = '[TraineeActionTypes] Loaded trainee details',
  UpdateTrainee = '[TraineeActionTypes] Update trainee',
  UpdatedTrainee = '[TraineeActionTypes] Updated trainee',
}

export class LoadTrainee implements Action {
  readonly type = TraineeDetailsActionTypes.LoadTrainee;
  constructor(public emplId: string) {};
}

export class LoadedTrainee implements Action {
  readonly type = TraineeDetailsActionTypes.LoadedTrainee;
  constructor(public traineeDetail: TraineeDetail) {}
}

export class UpdateTrainee implements Action {
  readonly type = TraineeDetailsActionTypes.UpdateTrainee;
  constructor(public emplId: string, public traineeDetail: TraineeDetail) {}
}

export class UpdatedTrainee implements Action {
  readonly type = TraineeDetailsActionTypes.UpdatedTrainee;
}

export type TraineeActions = 
  LoadTrainee | 
  LoadedTrainee |
  UpdateTrainee |
  UpdatedTrainee;