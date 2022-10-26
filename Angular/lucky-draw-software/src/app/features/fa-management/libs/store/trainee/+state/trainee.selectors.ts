import { createFeatureSelector, createSelector } from '@ngrx/store';
import { featureKey, InitState } from './trainee.reducer';

const getTraineeState = createFeatureSelector<InitState>(featureKey);

export const traineeQuery = {
  getLoadedTrainees: createSelector(getTraineeState, (state: InitState) =>
    state.list.filter((t) => {
      const { emplId, account, name, dob, phone, email, } = state.dataSearch;
      return (
        (!emplId || t.emplId.toLowerCase().includes(emplId.toLowerCase())) &&
        (!account || t.account.toLowerCase().includes(account.toLowerCase())) &&
        (!name || t.name.toLowerCase().includes(name.toLowerCase())) &&
        (!dob || t.dob.toLowerCase().includes(dob.toLowerCase())) &&
        (!phone || t.phone.toLowerCase().includes(phone.toLowerCase())) &&
        (!email || t.email.toLowerCase().includes(email.toLowerCase()))
      );
    })
  ),  
  isLoadedTrainees: createSelector(getTraineeState, (state) => state.isLoadedList),
};
