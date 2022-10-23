import { createFeatureSelector, createSelector } from '@ngrx/store';
import { featureKey, InitState } from './trainee.reducer';

const getTraineeState = createFeatureSelector<InitState>(featureKey);

export const traineeQuery = {
  getLoadedTrainees: createSelector(getTraineeState, (state: InitState) =>
    state.list.filter((t) => {
      const { emplId, account, name, dob, phone, email, } = state.dataSearch;
      return (
        (!emplId || emplId === t.emplId) &&
        (!account || account === t.account) &&
        (!name || name === t.name) &&
        (!dob || dob === t.dob) &&
        (!phone || phone === t.phone) &&
        (!email || email === t.email)
      );
    })
  ),  
  isLoadedTrainees: createSelector(getTraineeState, (state) => state.isLoadedList),
};
