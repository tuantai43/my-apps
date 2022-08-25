import { createFeatureSelector, createSelector } from '@ngrx/store';
import { locationFeatureKey, LocationState } from './location.reducer';

const getLocationState = createFeatureSelector<LocationState>(locationFeatureKey);

export const locationQuery = {
  getLocations: createSelector(getLocationState, (state) => state.locations),
};
