import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as moment from 'moment';
import { concatMap, of } from 'rxjs';
import { ClassActions, ClassDetailsActionTypes, LoadedClass } from './class-detail.action';
import { ClassType } from './class-detail.reducer';
import { FORMAT_DATE } from '@fa-management/utils/configs';

@Injectable()
export class ClassDetailsEffects {
  loadRoles$ = createEffect(() =>
    this.action$.pipe(
      ofType(ClassDetailsActionTypes.LoadClass),
      concatMap(() =>
        of(
          new LoadedClass({
            id: 1,
            code: 'HN_FR_Java_17_01',
            name: 'Fresher Developer Java',
            startDate: '01-09-2022',
            endDate: '01-12-2022',
            location: 1,
            status: 1,
            plannedTraineeNo: 20,
            acceptedTraineeNo: 19,
            actualTraineeNo: 17,
            budgetCode: 2,
            classAdmin: [1],
            detailedLocation: 'ABC',
            estimatedBudget: '327690000',
            expectedEndDate: new Date('2022/11/01'),
            expectedStartDate: new Date('2022/08/01'),
            learningPath: 'FR_Java_01_Developer',
            createdBy: 'TaiPT3',
            createdDate: '2022/09/17',
            type: ClassType.Fresher,
            skill: 'Angular',
          })
        )
      )
    )
  );

  constructor(private action$: Actions<ClassActions>) {}
}
