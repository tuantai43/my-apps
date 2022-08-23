import { CoreActions, CoreActionTypes } from './core.action';

export const coreFeatureKey = 'core';

export enum UserRole {
  All = 'All',
  FaManager = 'FM',
  DiliveryManager = 'DM',
  ClassAdmin = 'CA',
  FaRec = 'FR',
  Trainer = 'TR',
  SystemAdmin = 'SA',
}

export interface CoreState {
  roles: UserRole[];
  isLoadedRoles: boolean;
}

const initialState = (): CoreState => ({
  roles: [],
  isLoadedRoles: false,
});

export function coreReducer(state = initialState(), action: CoreActions): CoreState {
  switch (action.type) {
    case CoreActionTypes.LoadRoles: {
      return state;
    }
    case CoreActionTypes.LoadedRoles: {
      return {
        ...state,
        isLoadedRoles: true,
        roles: action.roles,
      };
    }
    default: {
      return state;
    }
  }
}
