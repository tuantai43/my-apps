import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, merge, mergeMap, of, tap } from 'rxjs';
import { AuthService } from '@lucky-draw/services';
import {
  AuthActions,
  AuthActionTypes,
  LoadedToken,
  LoadRefreshToken,
  Registered,
  ResetAuth,
  UpdateError,
} from './auth.action';
import { HttpErrorResponse } from '@angular/common/http';

enum AuthSession {
  UserId = 'ui',
  Token = 'tk',
  RefreshToken = 'rtk',
}

enum ErrorCode {
  TokenExpired = 'HASL',
}

@Injectable()
export class AuthEffects {
  loadToken$ = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActionTypes.LoadToken),
      concatMap(() => {
        const token = sessionStorage.getItem(AuthSession.Token) || '';
        const refreshToken = sessionStorage.getItem(AuthSession.RefreshToken) || '';
        const userId = sessionStorage.getItem(AuthSession.UserId) || '';
        if (token) {
          return this.authService.user(userId, token).pipe(
            map(
              (response) => new LoadedToken(token, refreshToken, userId, response.firstName, response.lastName, true)
            ),
            catchError((error: HttpErrorResponse) => {
              if (error.error && error.error.code && error.error.code === ErrorCode.TokenExpired) {
                return of(new LoadRefreshToken());
              }
              sessionStorage.removeItem(AuthSession.Token);
              sessionStorage.removeItem(AuthSession.RefreshToken);
              sessionStorage.removeItem(AuthSession.UserId);
              return of(new UpdateError());
            })
          );
        }
        return of(new UpdateError());
      })
    )
  );

  loadRefreshToken = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActionTypes.LoadRefreshToken),
      concatMap(() => {
        const token = sessionStorage.getItem(AuthSession.Token) || '';
        const refreshToken = sessionStorage.getItem(AuthSession.RefreshToken) || '';
        const userId = sessionStorage.getItem(AuthSession.UserId) || '';
        if (refreshToken) {
          return this.authService.refreshToken(refreshToken, token).pipe(
            map((response) => {
              sessionStorage.setItem(AuthSession.Token, response.accessToken);
              sessionStorage.setItem(AuthSession.RefreshToken, response.refreshToken);
              sessionStorage.setItem(AuthSession.UserId, response.info.userId);
              return new LoadedToken(
                response.accessToken,
                response.refreshToken,
                userId,
                response.info.firstName,
                response.info.lastName,
                true
              );
            }),
            catchError(() => {
              sessionStorage.removeItem(AuthSession.Token);
              sessionStorage.removeItem(AuthSession.RefreshToken);
              sessionStorage.removeItem(AuthSession.UserId);
              return of(new UpdateError('Error'));
            })
          );
        }
        return of(new UpdateError());
      })
    )
  );

  doLogin$ = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActionTypes.DoLogin),
      concatMap(({ loginInfo }) => {
        const { email, password } = loginInfo;
        return this.authService.login(email, password).pipe(
          map((response) => {
            sessionStorage.setItem(AuthSession.Token, response.accessToken);
            sessionStorage.setItem(AuthSession.RefreshToken, response.refreshToken);
            sessionStorage.setItem(AuthSession.UserId, response.info.userId);
            return new LoadedToken(
              response.accessToken,
              response.refreshToken,
              response.info.userId,
              response.info.firstName,
              response.info.lastName,
              true
            );
          }),
          catchError((error: HttpErrorResponse) => {
            let code = error.message;
            if (error.error && error.error.code) {
              code = error.error.code;
            }
            return of(new UpdateError(code));
          })
        );
      })
    )
  );

  doRegister$ = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActionTypes.DoRegister),
      concatMap(({ registerInfo }) => {
        const { email, password, firstName, lastName } = registerInfo;
        return this.authService.register(email, password, firstName, lastName).pipe(
          map(() => new Registered(true)),
          catchError((error: HttpErrorResponse) => {
            let code = error.message;
            if (error.error && error.error.code) {
              code = error.error.code;
            }
            return of(new UpdateError(code));
          })
        );
      })
    )
  );

  doLogout$ = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActionTypes.DoLogout),
      concatMap(() => {
        const userId = sessionStorage.getItem(AuthSession.UserId) || '';
        sessionStorage.removeItem(AuthSession.Token);
        sessionStorage.removeItem(AuthSession.RefreshToken);
        sessionStorage.removeItem(AuthSession.UserId);
        return this.authService.logout(userId).pipe(
          map(() => new ResetAuth()),
          catchError(() => of(new ResetAuth()))
        );
      })
    )
  );

  constructor(private action$: Actions<AuthActions>, private authService: AuthService) {}
}
