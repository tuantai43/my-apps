import { ClassActions, ClassActionTypes } from './class.action';

export const classFeatureKey = 'class';
export enum ClassStatus {
  InProgress = 1,
  Enrolled = 2,
  Submitted = 3,
  Draft = 4,
  Cancelled = 5,
}

export interface ClassView {
  id: number;
  code: string;
  name: string;
  startDate: string;
  endDate: string;
  location: number | string;
  status: ClassStatus;
}

export const initialClass = (): ClassView => ({
  id: -1,
  code: '',
  name: '',
  startDate: '',
  endDate: '',
  location: -1,
  status: ClassStatus.Draft,
});

export interface DataSearch {
  location: number;
  className: string;
  status: number;
}

export interface ClassState {
  classes: ClassView[];
  isLoadedClass: boolean;
  dataSearch: DataSearch;
}

const initialState = (): ClassState => ({
  classes: [],
  isLoadedClass: false,
  dataSearch: {
    location: 0,
    className: '',
    status: 0,
  },
});

export function classReducer(state = initialState(), action: ClassActions): ClassState {
  switch (action.type) {
    case ClassActionTypes.LoadClass: {
      return state;
    }
    case ClassActionTypes.LoadedClass: {
      return {
        ...state,
        isLoadedClass: true,
        classes: action.classes,
      };
    }
    case ClassActionTypes.UpdateDataSearch: {
      return {
        ...state,
        dataSearch: action.dataSearch,
      };
    }
    default: {
      return state;
    }
  }
}
