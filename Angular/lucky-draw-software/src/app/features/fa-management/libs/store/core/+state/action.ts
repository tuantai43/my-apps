import { Action } from '@ngrx/store';
import { UserInfo, UserRole } from './reducer';

export enum CoreActionTypes {
  LoadUserInfo = '[CoreActionTypes] Load User Info',
  LoadedUserInfo = '[CoreActionTypes] Loaded User Info',
}

export class LoadUserInfo implements Action {
  readonly type = CoreActionTypes.LoadUserInfo;
}

export class LoadedUserInfo implements Action {
  readonly type = CoreActionTypes.LoadedUserInfo;
  constructor(public userInfo: UserInfo) {}
}

export type CoreActions = LoadUserInfo | LoadedUserInfo;
