import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadUserInfo } from './action';
import { CoreState } from './reducer';
import { coreQuery } from './selectors';

@Injectable()
export class CoreFacade {
  roles$ = this.store.select(coreQuery.getLoadedRoles);
  isLoadedUserInfo$ = this.store.select(coreQuery.isLoadedUserInfo);

  constructor(private store: Store<CoreState>) {
    this.getUserInfo();
  }

  getUserInfo() {
    this.store.dispatch(new LoadUserInfo());
  }
}
