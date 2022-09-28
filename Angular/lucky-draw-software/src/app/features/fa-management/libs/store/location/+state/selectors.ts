import { createFeatureSelector, createSelector } from '@ngrx/store';
import { featureKey, InitState } from './reducer';

const getInitState = createFeatureSelector<InitState>(featureKey);

export const query = {
  getList: createSelector(getInitState, (state) => state.list),
  isLoadedList: createSelector(getInitState, (state) => state.isLoadedList),
};
