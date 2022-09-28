import { SubSubjectTypeActions, ActionTypes } from './action';

export const featureKey = 'subSubjectType';

export interface SubSubjectType {
  id: number;
  name: string;
}

export interface InitState {
  list: SubSubjectType[];
  isLoadedList: boolean;
}

const initialState = (): InitState => ({
  list: [],
  isLoadedList: false,
});

export function reducer(state = initialState(), action: SubSubjectTypeActions): InitState {
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
