import { Action } from '@ngrx/store';
import { LoginInfo, RegisterInfo } from './auth.facade';

export enum AuthActionTypes {
  UpdateLoading = '[AuthActionTypes] Update loading',
  UpdateError = '[AuthActionTypes] Update error',
  LoadToken = '[AuthActionTypes] Load token',
  LoadedToken = '[AuthActionTypes] Loaded token',
  LoadRefreshToken = '[AuthActionTypes] Load refresh token',
  DoLogin = '[AuthActionTypes] Do login',
  DoRegister = '[AuthActionTypes] Do register',
  Registered = '[AuthActionTypes] Registered',
  DoLogout = '[AuthActionTypes] Do logout',
  ResetAuth = '[AuthActionTypes] Reset auth',
  LoadAuth = '[AuthActionTypes] Load auth',
  LoadedAuth = '[AuthActionTypes] Loaded Auth',
  LoadedUser = '[AuthActionTypes] Loaded user',
}

export class UpdateLoading implements Action {
  readonly type = AuthActionTypes.UpdateLoading;
  constructor(public loading: boolean) {}
}

export class UpdateError implements Action {
  readonly type = AuthActionTypes.UpdateError;
  constructor(public error: string = '') {}
}

export class LoadToken implements Action {
  readonly type = AuthActionTypes.LoadToken;
}

export class LoadRefreshToken implements Action {
  readonly type = AuthActionTypes.LoadRefreshToken;
}

export class LoadedToken implements Action {
  readonly type = AuthActionTypes.LoadedToken;
  constructor(public token: string, public refreshToken: string, public userId: string) {}
}

export class LoadedAuth implements Action {
  readonly type = AuthActionTypes.LoadedAuth;
  constructor(
    public token: string,
    public refreshToken: string,
    public userId: string,
    public firstName: string,
    public lastName: string
  ) {}
}

export class DoLogin implements Action {
  readonly type = AuthActionTypes.DoLogin;
  constructor(public loginInfo: LoginInfo) {}
}

export class DoRegister implements Action {
  readonly type = AuthActionTypes.DoRegister;
  constructor(public registerInfo: RegisterInfo) {}
}

export class Registered implements Action {
  readonly type = AuthActionTypes.Registered;
  constructor(public registered: boolean) {}
}

export class DoLogout implements Action {
  readonly type = AuthActionTypes.DoLogout;
}

export class LoadAuth implements Action {
  readonly type = AuthActionTypes.LoadAuth;
  constructor(public userId: string) {}
}

export class ResetAuth implements Action {
  readonly type = AuthActionTypes.ResetAuth;
}

export class LoadedUser implements Action {
  readonly type = AuthActionTypes.LoadedUser;

  constructor(public firstName: string, public lastName: string) {}
}

export type AuthActions =
  | LoadToken
  | LoadedToken
  | DoLogin
  | UpdateLoading
  | UpdateError
  | DoRegister
  | Registered
  | LoadRefreshToken
  | DoLogout
  | LoadAuth
  | ResetAuth
  | LoadedAuth
  | LoadedUser;
