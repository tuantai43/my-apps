import { TraineeActions, ActionTypes } from './trainee.action';

export const featureKey = 'trainee';
export enum TraineeStatus {
  waitingForClass = 0,
  active = 1,
}

export interface TraineeView {
  emplId: number;
  account: string;
  name: string;
  dob: string;
  gender: string;
  university: string;
  faculty: string;
  phone: string;
  email: string;
  status?: TraineeStatus;
}

export const initialTrainee = (): TraineeView => ({
  emplId: -1,
  account: '',
  name: '',
  dob: '',
  gender: '',
  university: '',
  faculty: '',
  phone: '',
  email: '',
  status: undefined,
});

export interface DataSearch {
  emplId: number;
  account: string;
  name: string;
  dob: string;
  phone: string;
  email: string;
}

export interface InitState {
  list: TraineeView[];
  isLoadedList: boolean;
  dataSearch: DataSearch;
}

const initialState = (): InitState => ({
  list: [],
  isLoadedList: false,
  dataSearch: {
    emplId: -1,
    account: '',
    name: '',
    dob: '',
    phone: '',
    email: '',
  },
});

export function reducer(state = initialState(), action: TraineeActions): InitState {
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