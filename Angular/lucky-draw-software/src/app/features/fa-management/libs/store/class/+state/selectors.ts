import { createFeatureSelector, createSelector } from '@ngrx/store';
import { featureKey, InitState } from './reducer';

const getClassState = createFeatureSelector<InitState>(featureKey);

export const classQuery = {
  getLoadedList: createSelector(getClassState, (state: InitState) =>
    state.list.filter((c) => {
      const { className, status, location } = state.dataSearch;
      return (
        (!className || className === c.name) &&
        (!status || status === c.status) &&
        (!location || location === c.location)
      );
    })
  ),
  getStatuses: createSelector(getClassState, (state) => Array.from(new Set(state.list.map((i) => i.status).sort()))),
  getClassNames: createSelector(getClassState, (state) => Array.from(new Set(state.list.map((i) => i.name).sort()))),
  isLoadedList: createSelector(getClassState, (state) => state.isLoadedList),
  cancelling: createSelector(getClassState, (state) => state.canceling),
};
