import { LocationActions, LocationActionTypes } from './location.action';

export const locationFeatureKey = 'location';

export interface Location {
  id: number;
  acronym: string;
  name: string;
}

export interface LocationState {
  locations: Location[];
  isLoadedLocation: boolean;
}

const initialState = (): LocationState => ({
  locations: [],
  isLoadedLocation: false,
});

export function locationReducer(state = initialState(), action: LocationActions): LocationState {
  switch (action.type) {
    case LocationActionTypes.LoadLocation: {
      return state;
    }
    case LocationActionTypes.LoadedLocation: {
      return {
        ...state,
        isLoadedLocation: true,
        locations: action.locations,
      };
    }
    default: {
      return state;
    }
  }
}
