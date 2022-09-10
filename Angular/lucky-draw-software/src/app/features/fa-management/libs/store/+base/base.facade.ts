import { Action, Store } from '@ngrx/store';
import { filter, map, Observable } from 'rxjs';

interface Base<T> {
  list$: Observable<T[]>;
  isLoadedList$: Observable<boolean>;
}

export abstract class BaseFacade<T, U> implements Base<U> {
  constructor(protected store: Store<T>, public list$: Observable<U[]>, public isLoadedList$: Observable<boolean>) {}

  protected getAll(action: Action) {
    this.isLoadedList$
      .pipe(filter((loaded) => !loaded))
      .subscribe(() => this.store.dispatch(action))
      .unsubscribe();
  }

  findBy(by: string, value: any) {
    return this.list$.pipe(map((locations) => locations.find((location: any) => location[by] === value)));
  }
}
