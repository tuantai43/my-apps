import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocationFacade } from '@app/features/fa-management/libs/store/location';
import { ClassDetails, initialClassDetail } from '../../store';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss'],
})
export class GeneralComponent implements OnInit {
  @Input()
  get class() {
    return this.mClass;
  }

  set class(value) {
    this.mClass = value;
    this.generalForm.patchValue(value || {});
  }

  locations$ = this.locationFacade.locations$;
  mClass: ClassDetails | null = initialClassDetail();
  generalForm = this.formBuilder.group({
    code: [
      {
        value: '',
        disabled: true,
      },
    ],
    name: [
      {
        value: '',
        disabled: true,
      },
    ],
    status: [
      {
        value: '',
        disabled: true,
      },
    ],
    plannedTraineeNo: '',
    acceptedTraineeNo: [
      {
        value: '',
        disabled: true,
      },
    ],
    actualTraineeNo: [
      {
        value: '',
        disabled: true,
      },
    ],
    expectedStartDate: ['', Validators.required],
    expectedEndDate: ['', Validators.required],
    location: ['', Validators.required],
    detailedLocation: '',
    budgetCode: ['', Validators.required],
    estimatedBudget: ['', Validators.required],
    classAdmin: ['', Validators.required],
    learningPath: ['', Validators.required],
    history: '',
  });

  constructor(private formBuilder: FormBuilder, private locationFacade: LocationFacade) {}

  ngOnInit(): void {}
}
