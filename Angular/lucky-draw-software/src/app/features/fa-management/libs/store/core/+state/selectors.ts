import { createFeatureSelector, createSelector } from '@ngrx/store';
import { coreFeatureKey, CoreState } from './reducer';

const getCoreState = createFeatureSelector<CoreState>(coreFeatureKey);

export const coreQuery = {
  getLoadedRoles: createSelector(getCoreState, (state: CoreState) => state.userInfo.roles),
  isLoadedUserInfo: createSelector(getCoreState, (state) => state.isLoadedUserInfo),
};
