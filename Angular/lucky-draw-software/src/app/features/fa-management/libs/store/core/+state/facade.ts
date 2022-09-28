import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadRoles } from './action';
import { CoreState } from './reducer';
import { coreQuery } from './selectors';

@Injectable()
export class CoreFacade {
  roles$ = this.store.select(coreQuery.getLoadedRoles);
  isLoadedRoles$ = this.store.select(coreQuery.isLoadedRoles);

  constructor(private store: Store<CoreState>) {
    this.loadRoles();
  }

  loadRoles() {
    this.store.dispatch(new LoadRoles());
  }
}
