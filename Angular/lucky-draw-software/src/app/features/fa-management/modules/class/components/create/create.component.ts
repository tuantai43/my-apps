import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ConfirmationPopupComponent,
  MIN_WIDTH,
  PopupType,
} from '@app/features/fa-management/libs/components/confirmation-popup/confirmation-popup.component';
import { ActionType, isDisabled } from '@fa-management/directives';
import { LocationFacade } from '@app/features/fa-management/libs/store/location';
import { filter, map, merge, Observable, of, Subject, switchMap, take, takeUntil, tap } from 'rxjs';
import { ScreenName } from '@fa-management/utils/enums';
import { CoreFacade } from '@fa-management/store/core';

import { ClassDetailsFacade } from '../../store';
import { RELATIVE_URL } from '../../class.routing';
import { ClassStatus, ClassFacade } from '@fa-management/store/class';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit, OnDestroy {
  destroy$ = new Subject();
  screenName!: ScreenName;
  ScreenName = ScreenName;
  isLoadedClass$ = this.classDetailsFacade.isLoadedClass$;
  class$ = this.classDetailsFacade.class$.pipe(
    tap((value) => {
      this.form.patchValue(value);
      if (
        value.status &&
        this.screenName === ScreenName.UpdateClass &&
        value.status !== ClassStatus.Draft &&
        value.status !== ClassStatus.InProgress
      ) {
        console.log(value.status);
        this.form.disable();
      }
    })
  );
  id: string = '';
  acronym: string = '';
  actionType = ActionType;
  form = this.formBuilder.group({
    // general
    code: ['', Validators.required],
    name: ['', Validators.required],
    status: '',
    plannedTraineeNo: '',
    expectedStartDate: ['', Validators.required],
    expectedEndDate: ['', Validators.required],
    location: ['', Validators.required],
    detailedLocation: '',
    budgetCode: ['', Validators.required],
    estimatedBudget: ['', Validators.required],
    classAdmin: ['', Validators.required],
    learningPath: ['', Validators.required],
    // details
    subjectType: '',
    subSubjectType: '',
    deliveryType: '',
    formatType: '',
    scope: '',
    supplier: '',
    actualStartDate: [{ value: '', disabled: true }],
    actualEndDate: [{ value: '', disabled: true }],
    masterTrainer: '',
    trainer: [],
    curriculum: '',
    remarks: '',
    // budgets
    budgets: this.formBuilder.array([]),
    // audits
    audits: this.formBuilder.array([]),
  });

  disableUpdate$: Observable<boolean> = this.coreFacade.roles$.pipe(
    takeUntil(this.destroy$),
    map((roles) => {
      return isDisabled(roles, ActionType.UpdateClass);
    })
  );

  disableSubmmitClass$: Observable<boolean> = this.coreFacade.roles$.pipe(
    takeUntil(this.destroy$),
    map((roles) => {
      return isDisabled(roles, ActionType.SubmitClass);
    })
  );

  disableStartClass$: Observable<boolean> = this.coreFacade.roles$.pipe(
    takeUntil(this.destroy$),
    map((roles) => {
      return isDisabled(roles, ActionType.StartClass);
    })
  );

  disableCancelClass$: Observable<boolean> = merge(
    this.coreFacade.roles$.pipe(
      takeUntil(this.destroy$),
      map((roles) => {
        return isDisabled(roles, ActionType.CancelClass);
      })
    ),
    this.classDetailsFacade.class$.pipe(
      takeUntil(this.destroy$),
      map((detail) => detail.status !== ClassStatus.Draft && detail.status !== ClassStatus.Submitted)
    )
  );

  constructor(
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private classDetailsFacade: ClassDetailsFacade,
    private classesFacade: ClassFacade,
    private coreFacade: CoreFacade,
    private locationFacade: LocationFacade,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.data.subscribe((data) => {
      this.screenName = data['screenName'];

      if (this.screenName === ScreenName.ViewClass) {
        this.form.disable();
      }
    });
    this.route.paramMap
      .pipe(
        takeUntil(this.destroy$),
        map((paramMap) => paramMap.get('id') || '')
      )
      .subscribe((id) => {
        this.id = id;
        this.classDetailsFacade.loadClass(id);
      });
  }

  ngOnInit(): void {
    this.form
      .get('location')
      ?.valueChanges.pipe(
        takeUntil(this.destroy$),
        switchMap((value) => this.locationFacade.findById(value).pipe(take(1)))
      )
      .subscribe((location) => {
        if (location) {
          this.acronym = location.acronym;
        }
      });
  }

  openDialogConfirm(): MatDialogRef<ConfirmationPopupComponent, any> {
    return this.dialog.open(ConfirmationPopupComponent, {
      minWidth: MIN_WIDTH,
      closeOnNavigation: true,
      data: {
        type: PopupType.Confirmation,
      },
    });
  }

  submit(): void {
    const dialogRef = this.openDialogConfirm();
    dialogRef
      .afterClosed()
      .pipe(
        take(1),
        filter((ok) => ok)
      )
      .subscribe(() => {
        if (this.screenName === ScreenName.UpdateClass) {
          this.classDetailsFacade.update(this.id, this.form.getRawValue());
        } else {
          this.classDetailsFacade.create(this.form.getRawValue());
        }
        merge(this.classDetailsFacade.isUpdatingClass$, this.classDetailsFacade.isCreatingClass$)
          .pipe(
            filter((loading) => !loading),
            take(1)
          )
          .subscribe(() => {
            this.router.navigate([RELATIVE_URL, this.id]);
          });
      });
  }

  update(): void {
    this.router.navigate([RELATIVE_URL, 'edit', this.id]);
  }

  cancel(): void {
    this.classesFacade.cancel([this.id]);
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
