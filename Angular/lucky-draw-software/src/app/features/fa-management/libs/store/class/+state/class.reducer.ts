import { ClassActions, ActionTypes } from './class.action';

export const featureKey = 'class';
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
  location?: number | string;
  status?: ClassStatus;
}

export const initialClass = (): ClassView => ({
  id: -1,
  code: '',
  name: '',
  startDate: '',
  endDate: '',
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
