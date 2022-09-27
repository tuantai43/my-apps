import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { SelectionTable } from '@app/features/fa-management/libs/utils/functions';
import { AuditDetails } from '../../store';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.scss'],
})
export class AuditComponent implements OnInit {
  @Input() detailForm: FormGroup = new FormGroup({});
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

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

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
