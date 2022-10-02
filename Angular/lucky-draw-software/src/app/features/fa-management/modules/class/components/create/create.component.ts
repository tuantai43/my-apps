import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import {
  ConfirmationPopupComponent,
  MIN_WIDTH,
  PopupType,
} from '@app/features/fa-management/libs/components/confirmation-popup/confirmation-popup.component';
import { ActionType } from '@app/features/fa-management/libs/directives';
import { LocationFacade } from '@app/features/fa-management/libs/store/location';
import { filter, map, Subject, switchMap, take, takeUntil, tap } from 'rxjs';
import { ClassDetailsFacade } from '../../store';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit, OnDestroy {
  destroy$ = new Subject();
  // isCreated$ = this.classDetailsFacade.
  isLoadedClass$ = this.classDetailsFacade.isLoadedClass$;
  class$ = this.classDetailsFacade.class$.pipe(tap((value) => this.form.patchValue(value)));
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

  constructor(
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private classDetailsFacade: ClassDetailsFacade,
    private locationFacade: LocationFacade,
    private route: ActivatedRoute
  ) {
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
        this.classDetailsFacade.create(this.form.getRawValue());
      });
  }

  update(): void {
    const dialogRef = this.openDialogConfirm();
    dialogRef
      .afterClosed()
      .pipe(
        take(1),
        filter((ok) => ok)
      )
      .subscribe(() => {
        console.log(this.id);
        this.classDetailsFacade.update(this.id, this.form.getRawValue());
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
