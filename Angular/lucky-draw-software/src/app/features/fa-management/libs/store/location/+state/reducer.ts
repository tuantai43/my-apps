import { LocationActions, ActionTypes } from './action';

export const featureKey = 'location';

export interface LocationView {
  id: string;
  acronym: string;
  name: string;
}

export interface InitState {
  list: LocationView[];
  isLoadedList: boolean;
}

const initialState = (): InitState => ({
  list: [],
  isLoadedList: false,
});

export function reducer(state = initialState(), action: LocationActions): InitState {
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
    default: {
      return state;
    }
  }
}
