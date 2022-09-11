import { FormatTypeActions, ActionTypes } from './format-type.action';

export const featureKey = 'formatType';

export interface FormatType {
  id: number;
  name: string;
}

export interface InitState {
  list: FormatType[];
  isLoadedList: boolean;
}

const initialState = (): InitState => ({
  list: [],
  isLoadedList: false,
});

export function reducer(state = initialState(), action: FormatTypeActions): InitState {
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
