import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { catchError, first, mergeMap, Observable, tap, throwError } from 'rxjs';
import { AuthFacade } from '@lucky-draw/store/auth';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authFacade: AuthFacade) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return this.authFacade.token$.pipe(
      first(),
      mergeMap((token) => {
        if (token) {
          return next
            .handle(
              request.clone({
                setHeaders: {
                  authorization: `Bearer ${token}`,
                },
              })
            )
            .pipe(
              tap({
                next: (event) => {
                  console.log('abc');
                  console.log(event);
                },
                error: (error) => {
                  console.log('mn');
                  console.log(error);
                },
              }),
              catchError((error) => {
                console.log(error);
                return throwError(error);
              })
            );
        }
        return next.handle(request);
      })
    );
  }
}
