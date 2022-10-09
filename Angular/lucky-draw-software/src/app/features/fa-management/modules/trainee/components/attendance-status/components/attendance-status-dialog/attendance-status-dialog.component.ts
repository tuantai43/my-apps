import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AttendanceStatus } from '@app/features/fa-management/libs/utils/models';

@Component({
  selector: 'app-trainee-attendance-status-dialog',
  templateUrl: './attendance-status-dialog.component.html',
  styleUrls: ['./attendance-status-dialog.component.scss']
})
export class AttendanceStatusDialogComponent implements OnInit {

  mode = 'view'

  form!: FormGroup;

  optionForStatus = ['P', 'A', 'E', 'L', 'An', 'En', 'Ln'];

  get arrFormStatus () {
    return this.form.get('statusOfEachDay') as FormArray;
  }

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AttendanceStatusDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AttendanceStatus,
    ) { }

  ngOnInit(): void {
    console.log(this.data);
    this.form = this.fb.group({
      statusOfEachDay: this.fb.array([]),
    })
    this.initForm();
  }

  initForm() {
    if(this.data.statusOfEachDay.length > 0) {
      this.data.statusOfEachDay.forEach((day) =>{
        this.arrFormStatus.push(this.fb.group({
          day: [{value: day, disabled: true}]
        }))
      })
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

  updateStatus() {
    if(this.mode === 'view') {
      this.mode = 'edit';
      this.arrFormStatus.controls.forEach((control) =>{
        control.enable();
      });
    }else{
      this.dialogRef.close({
        name: this.data.name,
        statusOfEachDay: this.arrFormStatus.value.map((i: any) => i.day)
      });
    }
  }
}
