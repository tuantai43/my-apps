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
  constructor(
    public token: string,
    public refreshToken: string,
    public userId: string,
    public firstName: string,
    public lastName: string,
    public isLogged: boolean
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

export class ResetAuth implements Action {
  readonly type = AuthActionTypes.ResetAuth;
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
  | ResetAuth;
