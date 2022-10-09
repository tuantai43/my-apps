import { ClassView, initialClass } from '@app/features/fa-management/libs/store/class';
import { ClassActions, ClassDetailsActionTypes } from './class-detail.action';

export const classFeatureKey = 'classDetails';

export enum ClassType {
  Fresher = 'FR',
  Campus = 'CP',
}

export interface AuditDetails {
  date: Date;
  eventCategory: string;
  relatedPeople: string;
  action: string;
  pic: string;
  deadline: string;
  note: string;
}

export interface BudgetDetails {
  id: number;
  item: string;
  unit: string;
  unitExpense: number;
  quantity: number;
  amount: number;
  tax: number;
  sum: number;
  note: string;
}

export interface ClassDetails extends ClassView {
  plannedTraineeNo?: number;
  acceptedTraineeNo?: number;
  actualTraineeNo?: number;
  expectedStartDate?: Date;
  expectedEndDate?: Date;
  detailedLocation: string;
  budgetCode?: number;
  estimatedBudget: string;
  classAdmin?: number[];
  learningPath: string;
  createdBy: string;
  createdAt?: string;
  updatedBy?: string;
  updatedAt?: string;
  type?: ClassType;
  skill: string;
  subjectType?: number;
  subSubjectType?: number;
  deliveryType?: number;
  formatType?: number;
  scope?: number;
  supplier: string;
  budgets: BudgetDetails[];
  audits: AuditDetails[];
}

export const initialClassDetail = (): ClassDetails => ({
  ...initialClass(),
  location: '',
  detailedLocation: '',
  estimatedBudget: '',
  learningPath: '',
  createdBy: '',
  createdAt: '',
  skill: '',
  supplier: '',
  budgets: [],
  audits: [],
});

export interface ClassDetailsState {
  class: ClassDetails;
  isLoadedClass: boolean;
  isCreating: boolean;
  isUpdating: boolean;
}

const initialState = (): ClassDetailsState => ({
  class: initialClassDetail(),
  isLoadedClass: false,
  isCreating: false,
  isUpdating: false,
});

export function classDetailsReducer(state = initialState(), action: ClassActions): ClassDetailsState {
  switch (action.type) {
    case ClassDetailsActionTypes.LoadClass: {
      return {
        ...state,
        class: initialClassDetail(),
        isLoadedClass: false,
      };
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
    case ClassDetailsActionTypes.CreatedClass: {
      return {
        ...state,
        isCreating: true,
      };
    }
    case ClassDetailsActionTypes.CreateClass: {
      return {
        ...state,
        isCreating: false,
      };
    }
    case ClassDetailsActionTypes.UpdateClass: {
      return {
        ...state,
        isUpdating: true,
      };
    }
    case ClassDetailsActionTypes.UpdatedClass: {
      return {
        ...state,
        isUpdating: false,
      };
    }
    default: {
      return state;
    }
  }
}
