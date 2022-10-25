import { createFeatureSelector, createSelector } from '@ngrx/store';
import { traineeFeatureKey, TraineeDetailsState } from './trainee-detail.reducer';

const getClassState = createFeatureSelector<TraineeDetailsState>(traineeFeatureKey);

export const traineeQuery = {
  getLoadedTrainees: createSelector(getClassState, (state: TraineeDetailsState) => state.trainee),
  isLoadedTrainees: createSelector(getClassState, (state) => state.isLoadedTrainee),
  isUpdate: createSelector(getClassState, (state) => state.isUpdated),
};
