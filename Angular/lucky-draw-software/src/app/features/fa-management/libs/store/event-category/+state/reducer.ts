import { EventCategoryActions, ActionTypes } from './action';

export const featureKey = 'eventCategory';

export interface EventCategory {
  id: number;
  name: string;
}

export interface InitState {
  list: EventCategory[];
  isLoadedList: boolean;
}

const initialState = (): InitState => ({
  list: [],
  isLoadedList: false,
});

export function reducer(state = initialState(), action: EventCategoryActions): InitState {
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
