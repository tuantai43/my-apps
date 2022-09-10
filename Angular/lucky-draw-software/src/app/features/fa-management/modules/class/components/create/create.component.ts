import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { mergeMap, tap } from 'rxjs';
import { ClassDetailsFacade } from '../../store';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  class$ = this.classDetailsFacade.class$.pipe(tap((value) => this.form.patchValue(value)));
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
