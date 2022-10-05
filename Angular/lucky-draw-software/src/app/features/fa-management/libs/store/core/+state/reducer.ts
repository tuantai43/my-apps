import { CoreActions, CoreActionTypes } from './action';

export const coreFeatureKey = 'core';

export enum UserRole {
  All = 'All',
  FaManager = 'FM',
  DeliveryManager = 'DM',
  ClassAdmin = 'CA',
  FaRec = 'FR',
  Trainer = 'TR',
  SystemAdmin = 'SA',
}

export interface UserInfo {
  id: string;
  account: string;
  name: string;
  roles: UserRole[];
}

export interface CoreState {
  roles: UserRole[];
  userInfo: UserInfo;
  isLoadedRoles: boolean;
  isLoadedUserInfo: boolean;
}

const initialState = (): CoreState => ({
  roles: [],
  userInfo: {
    id: '',
    account: '',
    name: '',
    roles: [],
  },
  isLoadedRoles: false,
  isLoadedUserInfo: false,
});

export function coreReducer(state = initialState(), action: CoreActions): CoreState {
  switch (action.type) {
    case CoreActionTypes.LoadUserInfo: {
      return state;
    }
    case CoreActionTypes.LoadedUserInfo: {
      return {
        ...state,
        userInfo: action.userInfo,
        isLoadedUserInfo: true,
      };
    }
    default: {
      return state;
    }
  }
}
