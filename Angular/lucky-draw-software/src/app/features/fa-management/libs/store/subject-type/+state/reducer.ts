import { SubjectTypeActions, ActionTypes } from './action';

export const featureKey = 'subjectType';

export interface SubjectType {
  id: number;
  name: string;
}

export interface InitState {
  list: SubjectType[];
  isLoadedList: boolean;
}

const initialState = (): InitState => ({
  list: [],
  isLoadedList: false,
});

export function reducer(state = initialState(), action: SubjectTypeActions): InitState {
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
