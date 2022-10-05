import { Injectable } from '@angular/core';
import { UserService } from '@fa-management/services';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import { CoreActions, CoreActionTypes, LoadedUserInfo } from './action';
import { UserInfo } from './reducer';

@Injectable()
export class CoreEffects {
  loadUser$ = createEffect(() =>
    this.action$.pipe(
      ofType(CoreActionTypes.LoadUserInfo),
      mergeMap(() => this.userService.getInfo<UserInfo>().pipe(map((userInfo) => new LoadedUserInfo(userInfo))))
    )
  );

  constructor(private action$: Actions<CoreActions>, private userService: UserService) {}
}
