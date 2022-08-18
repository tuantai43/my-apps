import { createFeatureSelector, createSelector } from '@ngrx/store';
import { coreFeatureKey, CoreState } from './core.reducer';

const getCoreState = createFeatureSelector<CoreState>(coreFeatureKey);

const getLoadedRoles = createSelector(getCoreState, (state: CoreState) => state.roles);
const isLoadedRoles = createSelector(getCoreState, (state) => state.isLoadedRoles);

export const coreQuery = {
  getLoadedRoles,
  isLoadedRoles,
};
