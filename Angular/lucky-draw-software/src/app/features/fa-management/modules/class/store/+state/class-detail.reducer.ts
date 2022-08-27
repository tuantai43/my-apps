import { ClassView, initialClass } from '@app/features/fa-management/libs/store/class';
import { ClassActions, ClassDetailsActionTypes } from './class-detail.action';

export const classFeatureKey = 'classDetails';

export enum ClassType {
  Fresher = 'FR',
  Campus = 'CP',
}

export interface ClassDetails extends ClassView {
  plannedTraineeNo?: number;
  acceptedTraineeNo?: number;
  actualTraineeNo?: number;
  expectedStartDate: string;
  expectedEndDate: string;
  detailedLocation: string;
  budgetCode?: string;
  estimatedBudget: string;
  classAdmin?: number;
  learningPath: string;
  history: string;
  type?: ClassType;
  skill: string;
}

export const initialClassDetail = (): ClassDetails => ({
  ...initialClass(),
  plannedTraineeNo: undefined,
  acceptedTraineeNo: undefined,
  actualTraineeNo: undefined,
  expectedStartDate: '',
  expectedEndDate: '',
  location: '',
  detailedLocation: '',
  budgetCode: '',
  estimatedBudget: '',
  classAdmin: undefined,
  learningPath: '',
  history: '',
  type: undefined,
  skill: '',
});

export interface ClassDetailsState {
  class: ClassDetails;
  isLoadedClass: boolean;
}

const initialState = (): ClassDetailsState => ({
  class: initialClassDetail(),
  isLoadedClass: false,
});

export function classDetailsReducer(state = initialState(), action: ClassActions): ClassDetailsState {
  switch (action.type) {
    case ClassDetailsActionTypes.LoadClass: {
      return state;
    }
    case ClassDetailsActionTypes.LoadedClass: {
      return {
        ...state,
        isLoadedClass: true,
        class: action.classDetails,
      };
    }
    case ClassDetailsActionTypes.ResetClass: {
      return {
        ...state,
        class: initialClassDetail(),
      };
    }
    default: {
      return state;
    }
  }
}
