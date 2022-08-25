import { createFeatureSelector, createSelector } from '@ngrx/store';
import { classFeatureKey, ClassState } from './class.reducer';

const getClassState = createFeatureSelector<ClassState>(classFeatureKey);

export const classQuery = {
  getLoadedClasses: createSelector(getClassState, (state: ClassState) =>
    state.classes.filter((c) => {
      const { className, status, location } = state.dataSearch;
      return (
        (!className || className === c.name) &&
        (!status || status === c.status) &&
        (!location || location === c.location)
      );
    })
  ),
  getStatuses: createSelector(getClassState, (state) => Array.from(new Set(state.classes.map((i) => i.status).sort()))),
  getClassNames: createSelector(getClassState, (state) => Array.from(new Set(state.classes.map((i) => i.name).sort()))),
  isLoadedClasses: createSelector(getClassState, (state) => state.isLoadedClass),
};
