import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { CreateClass, LoadClass, ResetClass, UpdateClass } from './class-detail.action';
import { ClassDetails, ClassDetailsState } from './class-detail.reducer';
import { classQuery } from './class-detail.selectors';

@Injectable()
export class ClassDetailsFacade {
  class$ = this.store.select(classQuery.getLoadedClasses);
  isLoadedClass$ = this.store.select(classQuery.isLoadedClasses);
  isCreatingClass$ = this.store.select(classQuery.isCreating);
  isUpdatingClass$ = this.store.select(classQuery.isUpdating);

  constructor(private store: Store<ClassDetailsState>) {}

  loadClass(id: string): void {
    this.store.dispatch(new LoadClass(id));
  }

  resetClass(): void {
    this.store.dispatch(new ResetClass());
  }

  create(classDetails: ClassDetails): void {
    this.store.dispatch(new CreateClass(classDetails));
  }

  update(id: string, classDetails: ClassDetails): void {
    this.store.dispatch(new UpdateClass(id, classDetails));
  }
}
