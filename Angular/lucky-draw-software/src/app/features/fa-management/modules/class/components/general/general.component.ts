import { CurrencyPipe, formatDate } from '@angular/common';
import { Inject } from '@angular/core';
import { Component, Input, OnInit, OnDestroy, LOCALE_ID } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LocationFacade } from '@fa-management/store/location';
import { FORMAT_DATE } from '@fa-management/utils/configs';
import { TranslateService } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { Subject, switchMap } from 'rxjs';
import { take, takeUntil } from 'rxjs';
import { ClassDetails, initialClassDetail } from '../../store';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss'],
})
export class GeneralComponent implements OnInit, OnDestroy {
  @Input()
  get class() {
    return this.mClass;
  }

  set class(value) {
    this.mClass = value;
    this.generalForm.patchValue(value || {});
  }

  locations$ = this.locationFacade.locations$;
  testPrice = '';
  destroy$ = new Subject();
  acronym: string = '';
  currentDate = new Date();
  mClass: ClassDetails | null = initialClassDetail();
  generalForm = this.formBuilder.group({
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

  get code$(): Observable<string> {
    if (this.class?.code) {
      return of(this.class.code);
    }

    const { learningPath } = this.generalForm.value as ClassDetails;
    const [type, skill, number] = learningPath.replace(/ /g, '').split('_');
    if (this.acronym && type && skill && number) {
      const year = formatDate(new Date(), FORMAT_DATE.CODE_CLASS, this.locale);
      return this.translateService
        .get('createClass.classCode.format', { acronym: this.acronym, type, skill, year, number })
        .pipe(take(1));
    }
    return of('');
  }

  get className$(): Observable<string> {
    if (this.class?.name) {
      return of(this.class.name);
    }

    const { learningPath } = this.generalForm.value as ClassDetails;
    const [, skill, , position] = learningPath.replace(/ /g, '').split('_');
    if (skill && position) {
      return this.translateService.get('createClass.className.format', { position, skill }).pipe(take(1));
    }
    return of('');
  }

  constructor(
    private formBuilder: FormBuilder,
    private locationFacade: LocationFacade,
    private translateService: TranslateService,
    private currencyPipe: CurrencyPipe,
    @Inject(LOCALE_ID) public locale: string
  ) {}

  ngOnInit(): void {
    this.generalForm
      .get('location')
      ?.valueChanges.pipe(
        takeUntil(this.destroy$),
        switchMap((value) => this.locationFacade.findById(Number(value)).pipe(take(1)))
      )
      .subscribe((location) => {
        if (location) {
          this.acronym = location.acronym;
        }
      });
  }

  transformAmount() {
    const { estimatedBudget } = this.generalForm.value as ClassDetails;
    this.generalForm.get('estimatedBudget')?.setValue(this.currencyPipe.transform(estimatedBudget));
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
