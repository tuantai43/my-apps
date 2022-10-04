import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { EventCategoryFacade } from '@app/features/fa-management/libs/store/event-category';
import { SelectionTable } from '@app/features/fa-management/libs/utils/functions';
import { AuditDetails, ClassDetails, initialClassDetail } from '../../store';
import { ScreenName } from '@fa-management/utils/enums';

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
      if (this.screenName === ScreenName.ViewClass) {
        this.detailForm.disable();
      }
    } else {
      this.detailForm?.get('audits')?.reset();
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
