import { TraineeView, initialTrainee } from '@app/features/fa-management/libs/store/trainee';
import { TraineeActions, TraineeDetailsActionTypes } from './trainee-detail.action';

export const traineeFeatureKey = 'traineeDetails';

export enum TraineeType {
  trainee = 'Trainee',
}

export interface TraineeDetail extends TraineeView {
  type: string;
  allocationStatus: string;
  salaryPaid: string;
  allowanceGroup: string;
  history: string;
  tpBankAccount: number;
  commitment: string;
}

export const initialTraineeDetail = (): TraineeDetail => ({
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
  trainee: TraineeDetail;
  isLoadedTrainee: boolean;
}

const initialState = (): TraineeDetailsState => ({
  trainee: initialTraineeDetail(),
  isLoadedTrainee: false,
});

// export function traineeDetailsReducer(state = initialState(), action: TraineeActions): TraineeDetailsState {
//   switch (action.type) {
//     case TraineeDetailsActionTypes.LoadTrainee: {
//       return state;
//     }
//     case TraineeDetailsActionTypes.LoadedTrainee: {
//       return {
//         ...state,
//         isLoadedTrainee: true,
//         trainee: action.traineeDetail,
//       };
//     }
//     default: {
//       return state;
//     }
//   }
// }

export function traineeDetailsReducer(state = initialState(), action: TraineeActions): TraineeDetailsState {
  switch (action.type) {
    case TraineeDetailsActionTypes.LoadTrainee: {
      return {
        ...state,
        trainee: initialTraineeDetail(),
        isLoadedTrainee: false,
      };
    }
    case TraineeDetailsActionTypes.LoadedTrainee: {
      return {
        ...state,
        isLoadedTrainee: true,
        trainee: action.traineeDetail,
      };
    }
    // case TraineeDetailsActionTypes.ResetClass: {
    //   return {
    //     ...state,
    //     class: initialClassDetail(),
    //   };
    // }
    // case TraineeDetailsActionTypes.CreatedClass: {
    //   return {
    //     ...state,
    //     isCreating: true,
    //   };
    // }
    // case TraineeDetailsActionTypes.CreateClass: {
    //   return {
    //     ...state,
    //     isCreating: false,
    //   };
    // }
    // case TraineeDetailsActionTypes.UpdateClass: {
    //   return {
    //     ...state,
    //     isUpdating: true,
    //   };
    // }
    // case TraineeDetailsActionTypes.UpdatedClass: {
    //   return {
    //     ...state,
    //     isUpdating: false,
    //   };
    // }
    default: {
      return state;
    }
  }
}
