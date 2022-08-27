import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, of } from 'rxjs';
import { ClassActions, ClassDetailsActionTypes, LoadedClass } from './class-detail.action';
import { ClassType } from './class-detail.reducer';

@Injectable()
export class ClassDetailsEffects {
  loadRoles$ = createEffect(() =>
    this.action$.pipe(
      ofType(ClassDetailsActionTypes.LoadClass),
      concatMap(() =>
        of(
          new LoadedClass({
            id: 1,
            code: 'HN_FR',
            name: 'ABC',
            startDate: 'start',
            endDate: 'end',
            location: 1,
            status: 1,
            plannedTraineeNo: 1,
            acceptedTraineeNo: 1,
            actualTraineeNo: 1,
            budgetCode: '',
            classAdmin: 1,
            detailedLocation: 'ABC',
            estimatedBudget: '',
            expectedEndDate: '',
            expectedStartDate: '',
            learningPath: '',
            history: '',
            type: ClassType.Fresher,
            skill: 'Angular',
          })
        )
      )
    )
  );

  constructor(private action$: Actions<ClassActions>) {}
}
