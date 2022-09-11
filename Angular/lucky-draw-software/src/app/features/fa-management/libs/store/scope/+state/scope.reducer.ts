import { ScopeActions, ActionTypes } from './scope.action';

export const featureKey = 'scope';

export interface Scope {
  id: number;
  name: string;
}

export interface InitState {
  list: Scope[];
  isLoadedList: boolean;
}

const initialState = (): InitState => ({
  list: [],
  isLoadedList: false,
});

export function reducer(state = initialState(), action: ScopeActions): InitState {
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
