import { createFeatureSelector, createSelector } from '@ngrx/store';
import { classFeatureKey, ClassState } from './class.reducer';

const getClassState = createFeatureSelector<ClassState>(classFeatureKey);

const getLoadedClasses = createSelector(getClassState, (state: ClassState) => state.classes);
const isLoadedClasses = createSelector(getClassState, (state) => state.isLoadedClass);

export const classQuery = {
  getLoadedClasses,
  isLoadedClasses,
};
