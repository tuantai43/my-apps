import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadLocation } from './location.action';
import { LocationState } from './location.reducer';
import { locationQuery } from './location.selectors';

@Injectable()
export class LocationFacade {
  locations$ = this.store.select(locationQuery.getLocations);
  constructor(private store: Store<LocationState>) {
    this.loadedLocation();
  }

  loadedLocation() {
    this.store.dispatch(new LoadLocation());
  }
}
