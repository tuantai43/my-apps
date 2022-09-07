import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { LoadList } from './location.action';
import { LocationState } from './location.reducer';
import { locationQuery } from './location.selectors';

@Injectable()
export class LocationFacade {
  list$ = this.store.select(locationQuery.getList);
  constructor(private store: Store<LocationState>) {
    this.loadList();
  }

  loadList() {
    this.store.dispatch(new LoadList());
  }

  findById(id: number) {
    return this.list$.pipe(map((locations) => locations.find((location) => location.id === id)));
  }

  findBy(by: 'id' | 'acronym' | 'name', value: string) {
    return this.list$.pipe(map((locations) => locations.find((location) => location[by].toString() === value)));
  }
}
