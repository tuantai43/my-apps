import { createFeatureSelector, createSelector } from '@ngrx/store';
import { featureKey, InitState } from './admin.reducer';

const getInitState = createFeatureSelector<InitState>(featureKey);

export const query = {
  getLoadedList: createSelector(getInitState, (state: InitState) => state.list),
  isLoadedList: createSelector(getInitState, (state) => state.isLoadedList),
};
