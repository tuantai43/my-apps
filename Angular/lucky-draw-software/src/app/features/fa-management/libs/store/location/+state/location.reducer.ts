import { LocationActions, ActionTypes } from './location.action';

export const featureKey = 'location';

export interface LocationView {
  id: number;
  acronym: string;
  name: string;
}

export interface LocationState {
  list: LocationView[];
  isLoadedList: boolean;
}

const initialState = (): LocationState => ({
  list: [],
  isLoadedList: false,
});

export function reducer(state = initialState(), action: LocationActions): LocationState {
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
