import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { DoLogin, DoLogout, DoRegister, LoadToken, UpdateError, UpdateLoading } from './auth.action';
import { AuthState } from './auth.reducer';
import { authQuery } from './auth.selectors';

export interface LoginInfo {
  email: string;
  password: string;
}

export interface RegisterInfo extends LoginInfo {
  firstName: string;
  lastName: string;
}

@Injectable()
export class AuthFacade {
  error$ = this.store.select(authQuery.getError);
  loading$ = this.store.select(authQuery.getLoading);
  registered$ = this.store.select(authQuery.getRegistered);
  token$ = this.store.select(authQuery.getToken);
  refreshToken$ = this.store.select(authQuery.getRefreshToken);
  isLogged$ = this.store.select(authQuery.getLogged);
  fullName$ = this.store.select(authQuery.getFullName);

  constructor(private store: Store<AuthState>) {}

  resetError() {
    this.store.dispatch(new UpdateError());
  }

  loadToken() {
    this.store.dispatch(new LoadToken());
  }

  doLogin(loginInfo: LoginInfo) {
    this.store.dispatch(new UpdateLoading(true));
    this.store.dispatch(new DoLogin(loginInfo));
  }

  doRegister(registerInfo: RegisterInfo) {
    this.store.dispatch(new UpdateLoading(true));
    this.store.dispatch(new DoRegister(registerInfo));
  }

  doLogout() {
    this.store.dispatch(new DoLogout());
  }
}
