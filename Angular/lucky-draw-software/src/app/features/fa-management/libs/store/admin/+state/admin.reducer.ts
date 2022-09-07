import { ClassAdminActions, ActionTypes } from './admin.action';

export const featureKey = 'classAdmin';

export interface ClassAdmin {
  id: number;
  name: string;
  account: string;
}

export interface InitState {
  list: ClassAdmin[];
  isLoadedList: boolean;
}

const initialState = (): InitState => ({
  list: [],
  isLoadedList: false,
});

export function reducer(state = initialState(), action: ClassAdminActions): InitState {
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
