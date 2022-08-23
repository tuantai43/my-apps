import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadRoles } from './core.action';
import { CoreState } from './core.reducer';
import { coreQuery } from './core.selectors';

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
