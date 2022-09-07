import { createFeatureSelector, createSelector } from '@ngrx/store';
import { featureKey, LocationState } from './location.reducer';

const getLocationState = createFeatureSelector<LocationState>(featureKey);

export const locationQuery = {
  getList: createSelector(getLocationState, (state) => state.list),
};
