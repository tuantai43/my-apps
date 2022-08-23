import { createFeatureSelector, createSelector } from '@ngrx/store';
import { authFeatureKey, AuthState } from './auth.reducer';

const getAuthState = createFeatureSelector<AuthState>(authFeatureKey);

export const authQuery = {
  getLoading: createSelector(getAuthState, (state) => state.loading),
  getToken: createSelector(getAuthState, (state) => state.token),
  getRefreshToken: createSelector(getAuthState, (state) => state.refreshToken),
  getLogged: createSelector(getAuthState, (state) => state.isLogged),
  getError: createSelector(getAuthState, (state) => state.error),
  getRegistered: createSelector(getAuthState, (state) => state.registered),
  getFullName: createSelector(getAuthState, (state) => `${state.firstName} ${state.lastName}`),
  getUserId: createSelector(getAuthState, (state) => state.userId),
  isLoadedToken: createSelector(getAuthState, (state) => state.loadedToken),
};
