import { ClassActions, ActionTypes } from './action';

export const featureKey = 'class';
export enum ClassStatus {
  InProgress = 1,
  Enrolled = 2,
  Submitted = 3,
  Draft = 4,
  Cancelled = 5,
}

export interface ClassView {
  id: string;
  code: string;
  name: string;
  actualStartDate?: Date;
  actualEndDate?: Date;
  location?: number | string;
  status?: ClassStatus;
}

export const initialClass = (): ClassView => ({
  id: '',
  code: '',
  name: '',
  actualStartDate: undefined,
  actualEndDate: undefined,
  location: undefined,
  status: undefined,
});

export interface DataSearch {
  location: number;
  className: string;
  status: number;
}

export interface InitState {
  list: ClassView[];
  isLoadedList: boolean;
  dataSearch: DataSearch;
}

const initialState = (): InitState => ({
  list: [],
  isLoadedList: false,
  dataSearch: {
    location: 0,
    className: '',
    status: 0,
  },
});

export function reducer(state = initialState(), action: ClassActions): InitState {
  switch (action.type) {
    case ActionTypes.LoadList: {
      return state;
    }
    case ActionTypes.LoadedList: {
      return {
        ...state,
        isLoadedList: true,
        list: action.list,
      };
    }
    case ActionTypes.UpdateDataSearch: {
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
