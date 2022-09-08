import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, of } from 'rxjs';
import { TraineeActions, TraineeDetailsActionTypes, LoadedTrainee } from './trainee-detail.action';
import { TraineeType } from './trainee-detail.reducer';

@Injectable()
export class TraineeDetailsEffects {
  loadRoles$ = createEffect(() =>
    this.action$.pipe(
      ofType(TraineeDetailsActionTypes.LoadTrainee),
      concatMap(() =>
        of(
          new LoadedTrainee({
            emplId: 1,
            type: TraineeType.trainee,
            status:  0,
            allocationStatus: 'Not Allocated',
            account: 'David',
            name: 'David Beckham',
            gender: 'Male',
            dob: '26/01/1998',
            university: 'ManU',
            faculty: 'Sport',
            phone: '0979456789',
            email: 'David@gmail.com',
            salaryPaid: '...',
            tpBankAccount: 1234567899,
            allowanceGroup: 'DEV-1',
            commitment: '6 months',
            history: 'create by David'
          })
        )
      )
    )
  );

  constructor(private action$: Actions<TraineeActions>) {}
}
