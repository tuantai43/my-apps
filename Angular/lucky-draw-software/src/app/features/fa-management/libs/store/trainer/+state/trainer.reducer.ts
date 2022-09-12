import { TrainerActions, ActionTypes } from './trainer.action';

export const featureKey = 'classAdmin';

export interface Trainer {
  id: number;
  name: string;
  account: string;
}

export interface InitState {
  list: Trainer[];
  isLoadedList: boolean;
}

const initialState = (): InitState => ({
  list: [],
  isLoadedList: false,
});

export function reducer(state = initialState(), action: TrainerActions): InitState {
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
