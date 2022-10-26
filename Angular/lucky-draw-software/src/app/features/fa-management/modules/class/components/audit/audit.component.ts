import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { EventCategoryFacade } from '@app/features/fa-management/libs/store/event-category';
import { SelectionTable } from '@app/features/fa-management/libs/utils/functions';
import { AuditDetails, ClassDetails, initialClassDetail } from '../../store';
import { ScreenName } from '@fa-management/utils/enums';
import { ClassStatus } from '@fa-management/store/class';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.scss'],
})
export class AuditComponent implements OnInit {
  @Input() detailForm!: FormGroup;
  @Input() screenName!: ScreenName;
  @Input()
  get class() {
    return this._class;
  }

  set class(value: ClassDetails | null) {
    this._class = value;
    this.handleClassChanges();
  }

  private _class: ClassDetails | null = initialClassDetail();
  disabledForm = false;
  eventCategories$ = this.eventCategoryFacade.list$;
  ScreenName = ScreenName;
  selectionTable = new SelectionTable<AuditDetails>([], [], true);
  displayedColumns: string[] = [
    'select',
    'date',
    'eventCategory',
    'relatedPeople',
    'action',
    'pic',
    'deadline',
    'note',
  ];

  get currentDate(): Date {
    return new Date();
  }

  constructor(private formBuilder: FormBuilder, private eventCategoryFacade: EventCategoryFacade) {
    this.eventCategoryFacade.loadList();
  }

  ngOnInit(): void {}

  handleClassChanges(): void {
    if (this.class && this.class.audits?.length) {
      this.class.audits.forEach(() => {
        this.addAudit();
      });
      this.detailForm?.get('audits')?.patchValue(this.class.audits);
    } else {
      this.detailForm?.get('audits')?.reset();
    }
    if (
      this.screenName === ScreenName.ViewClass ||
      (this.screenName === ScreenName.UpdateClass && this.class?.status !== ClassStatus.InProgress)
    ) {
      this.detailForm.get('audits')?.disable();
      this.disabledForm = true;
    } else {
      this.disabledForm = false;
    }
  }

  addAudit(): void {
    const audits = this.detailForm.get('audits') as FormArray;
    audits.push(
      this.formBuilder.group({
        date: '',
        eventCategory: '',
        relatedPeople: '',
        action: '',
        pic: '',
        deadline: '',
        note: '',
      })
    );
    this.selectionTable.dataSource.data = audits.value;
  }

  deleteAudit(index: number): void {
    const audits = this.detailForm.get('audits') as FormArray;
    audits.removeAt(index);
    this.selectionTable.dataSource.data = audits.value;
  }
}
