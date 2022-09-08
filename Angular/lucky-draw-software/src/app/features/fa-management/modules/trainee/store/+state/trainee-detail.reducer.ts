import { TraineeView, initialTrainee } from '@app/features/fa-management/libs/store/trainee';
import { TraineeActions, TraineeDetailsActionTypes } from './trainee-detail.action';

export const traineeFeatureKey = 'traineeDetails';

export enum TraineeType {
  trainee = 'Trainee',
}

export interface TraineeDetails extends TraineeView {
  type: string;
  allocationStatus: string;
  salaryPaid: string;
  allowanceGroup: string;
  history: string;
  tpBankAccount: number;
  commitment: string;
}

export const initialTraineeDetail = (): TraineeDetails => ({
  ...initialTrainee(),
  type: '',
  allocationStatus: '',
  salaryPaid: '',
  allowanceGroup: '',
  history: '',
  tpBankAccount: -1,
  commitment: '',
});

export interface TraineeDetailsState {
  trainee: TraineeDetails;
  isLoadedTrainee: boolean;
}

const initialState = (): TraineeDetailsState => ({
  trainee: initialTraineeDetail(),
  isLoadedTrainee: false,
});

export function traineeDetailsReducer(state = initialState(), action: TraineeActions): TraineeDetailsState {
  switch (action.type) {
    case TraineeDetailsActionTypes.LoadTrainee: {
      return state;
    }
    case TraineeDetailsActionTypes.LoadedTrainee: {
      return {
        ...state,
        isLoadedTrainee: true,
        trainee: action.traineeDetails,
      };
    }
    default: {
      return state;
    }
  }
}
