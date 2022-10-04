import { createFeatureSelector, createSelector } from '@ngrx/store';
import { classFeatureKey, ClassDetailsState } from './class-detail.reducer';

const getClassState = createFeatureSelector<ClassDetailsState>(classFeatureKey);

export const classQuery = {
  getLoadedClasses: createSelector(getClassState, (state: ClassDetailsState) => state.class),
  isLoadedClasses: createSelector(getClassState, (state) => state.isLoadedClass),
  isUpdating: createSelector(getClassState, (state) => state.isUpdating),
  isCreating: createSelector(getClassState, (state) => state.isCreating),
};
