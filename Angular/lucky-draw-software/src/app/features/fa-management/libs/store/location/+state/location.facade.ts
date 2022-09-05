import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
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

  findById(id: number) {
    return this.locations$.pipe(map((locations) => locations.find((location) => location.id === id)));
  }

  findBy(by: 'id' | 'acronym' | 'name', value: string) {
    return this.locations$.pipe(map((locations) => locations.find((location) => location[by].toString() === value)));
  }
}
