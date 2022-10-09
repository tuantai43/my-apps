import { Injectable } from '@angular/core';
import { ClassService } from '@fa-management/services';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map, of } from 'rxjs';
import { ClassActions, ClassDetailsActionTypes, CreatedClass, LoadedClass, UpdatedClass } from './class-detail.action';
import { ClassDetails } from './class-detail.reducer';

@Injectable()
export class ClassDetailsEffects {
  loadRoles$ = createEffect(() =>
    this.action$.pipe(
      ofType(ClassDetailsActionTypes.LoadClass),
      concatMap(({ id }) => {
        if (id) {
          return this.classService.get<ClassDetails>(id).pipe(map((res) => new LoadedClass(res)));
        } else {
          return of(new LoadedClass({} as ClassDetails));
        }
      })
    )
  );

  createClass$ = createEffect(() =>
    this.action$.pipe(
      ofType(ClassDetailsActionTypes.CreateClass),
      concatMap(({ classDetails }) => this.classService.create(classDetails).pipe(map(() => new CreatedClass())))
    )
  );

  updateClass$ = createEffect(() =>
    this.action$.pipe(
      ofType(ClassDetailsActionTypes.UpdateClass),
      concatMap(({ id, classDetails }) =>
        this.classService.update(id, classDetails).pipe(map(() => new UpdatedClass()))
      )
    )
  );

  constructor(private action$: Actions<ClassActions>, private classService: ClassService<ClassDetails>) {}
}
