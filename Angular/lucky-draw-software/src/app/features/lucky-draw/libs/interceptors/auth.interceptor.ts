import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { catchError, filter, first, mergeMap, Observable, switchMap, take, tap, throwError } from 'rxjs';
import { AuthFacade } from '@lucky-draw/store/auth';
import { ErrorCode } from '../utils';

@Injectable({ providedIn: 'root' })
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authFacade: AuthFacade) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return this.authFacade.token$.pipe(
      first(),
      mergeMap((token) => {
        if (token) {
          const authReq = this.addToken(request, token);
          return next.handle(authReq).pipe(
            catchError((res) => {
              if (res.error && res.error.code) {
                switch (res.error.code) {
                  case ErrorCode.TokenExpired: {
                    return this.handleExpiredToken(request, next, token);
                  }
                  case ErrorCode.TokenInvalid:
                  case ErrorCode.RefreshTokenInvalid: {
                    this.authFacade.doLogout();
                  }
                }
              }
              return throwError(res);
            })
          );
        }
        return next.handle(request);
      })
    );
  }

  private handleExpiredToken(
    request: HttpRequest<unknown>,
    next: HttpHandler,
    oldToken: string
  ): Observable<HttpEvent<unknown>> {
    this.authFacade.loadRefreshToken();
    return this.authFacade.token$.pipe(
      filter((token) => !!token && token !== oldToken),
      take(1),
      switchMap((token) => next.handle(this.addToken(request, token))),
      catchError((res) => {
        this.authFacade.doLogout();
        return throwError(res);
      })
    );
  }

  // private addRefreshToken (request: HttpRequest<unknown>, token: string) {
  //   return request.clone({
  //     setHeaders
  //   })
  // }

  private addToken(request: HttpRequest<unknown>, token: string) {
    return request.clone({
      setHeaders: {
        authorization: `Bearer ${token}`,
      },
    });
  }
}
