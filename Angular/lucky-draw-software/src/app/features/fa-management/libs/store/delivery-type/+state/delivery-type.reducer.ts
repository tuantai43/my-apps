import { DeliveryTypeActions, ActionTypes } from './delivery-type.action';

export const featureKey = 'deliveryType';

export interface DeliveryType {
  id: number;
  name: string;
}

export interface InitState {
  list: DeliveryType[];
  isLoadedList: boolean;
}

const initialState = (): InitState => ({
  list: [],
  isLoadedList: false,
});

export function reducer(state = initialState(), action: DeliveryTypeActions): InitState {
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
