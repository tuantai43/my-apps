import { formatDate } from '@angular/common';
import { Inject } from '@angular/core';
import { Component, Input, OnInit, OnDestroy, LOCALE_ID } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ClassStatus } from '@app/features/fa-management/libs/store/class';
import { ClassAdminFacade } from '@fa-management/store/admin';
import { BudgetFacade } from '@fa-management/store/budget';
import { LocationFacade } from '@fa-management/store/location';
import { FORMAT_DATE } from '@fa-management/utils/configs';
import { TranslateService } from '@ngx-translate/core';
import { combineLatestWith, distinctUntilChanged, map, tap } from 'rxjs';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs';
import { ClassDetails, initialClassDetail } from '../../store';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss'],
})
export class GeneralComponent implements OnInit, OnDestroy {
  @Input() generalForm!: FormGroup;
  @Input()
  get class() {
    return this._class;
  }

  set class(value: ClassDetails | null) {
    this._class = value;
    this.updateHistory();
  }

  @Input()
  get acronym(): string {
    return this._acronym;
  }

  set acronym(value: string) {
    this._acronym = value;
    this.acronym$.next(value);
  }

  private _class: ClassDetails | null = initialClassDetail();
  private _acronym: string = '';

  acronym$ = new Subject<string>();
  locations$ = this.locationFacade.list$;
  budgets$ = this.budgetFacade.list$;
  admins$ = this.classAdminFacade.list$;
  destroy$ = new Subject();
  name: string = '';
  code: string = '';
  history: string = '';

  get currentDate(): Date | null {
    if (this.class?.createdBy) {
      return null;
    }
    return new Date();
  }

  constructor(
    private locationFacade: LocationFacade,
    private budgetFacade: BudgetFacade,
    private classAdminFacade: ClassAdminFacade,
    private translateService: TranslateService,
    @Inject(LOCALE_ID) public locale: string
  ) {
    this.classAdminFacade.loadList();
    this.budgetFacade.loadList();
  }

  ngOnInit(): void {
    this.generalForm
      .get('learningPath')
      ?.valueChanges.pipe(
        combineLatestWith(this.acronym$),
        takeUntil(this.destroy$),
        distinctUntilChanged(),
        map(([learningPath]) => learningPath.replace(/ /g, '').split('_')),
        tap((value) => this.updateCodeName(value))
      )
      .subscribe();
  }

  updateHistory(): void {
    if (this.class) {
      const at = this.class.updatedAt || this.class.createdAt;
      const date = at ? formatDate(at, FORMAT_DATE.HISTORY, this.locale) : '';
      const account = this.class.updatedBy || this.class.createdBy || '';
      let key = '';
      switch (this.class?.status) {
        case ClassStatus.Cancelled: {
          key = 'createClass.history.cancelled';
          break;
        }
        case ClassStatus.InProgress: {
          key = 'createClass.history.cancelled';
          break;
        }
        default: {
          if (this.class.updatedAt) {
            key = 'createClass.history.updated';
          } else if (this.class.createdAt) {
            key = 'createClass.history.created';
          }
        }
      }
      if (key) {
        this.translateService
          .get(key, {
            date,
            account,
          })
          .pipe(take(1))
          .subscribe((value) => {
            this.history = value;
          });
      }
    }
  }

  updateCodeName([type, skill, number, position]: [string, string, string, string]): void {
    this.updateName(skill, position);
    this.updateCode(type, skill, number);
  }

  updateName(skill: string, position: string): void {
    if (skill && position) {
      this.translateService
        .get('createClass.className.format', { position, skill })
        .pipe<string>(take(1))
        .subscribe((value) => {
          this.generalForm.get('name')?.setValue(value);
          this.name = value;
        });
    } else {
      this.generalForm.get('name')?.setValue('');
      this.name = '';
    }
  }

  updateCode(type: string, skill: string, number: string): void {
    if (this.acronym && type && skill && number) {
      const year = formatDate(new Date(), FORMAT_DATE.CODE_CLASS, this.locale);
      this.translateService
        .get('createClass.classCode.format', { acronym: this.acronym, type, skill, year, number })
        .pipe(take(1))
        .subscribe((value) => {
          this.generalForm.get('code')?.setValue(value);
          this.code = value;
        });
    } else {
      this.generalForm.get('code')?.setValue('');
      this.code = '';
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
    this.acronym$.unsubscribe();
  }
}
