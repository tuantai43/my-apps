import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActionType } from '@app/features/fa-management/libs/directives';
import { tap } from 'rxjs';
import { ClassDetailsFacade } from '../../store';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  class$ = this.classDetailsFacade.class$.pipe(tap((value) => this.form.patchValue(value)));
  actionType = ActionType;
  form = this.formBuilder.group({
    // general
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

  constructor(private formBuilder: FormBuilder, private classDetailsFacade: ClassDetailsFacade) {}

  ngOnInit(): void {}

  reset() {
    this.classDetailsFacade.resetClass();
  }

  load() {
    this.classDetailsFacade.loadedClass();
  }
}
