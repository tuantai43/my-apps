import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-trainee-allocation',
  templateUrl: './allocation.component.html',
  styleUrls: ['./allocation.component.scss']
})
export class AllocationComponent implements OnInit {
  @Input() formResult!: FormGroup;
  @Input() isEditControl!: boolean;
  private _mode!: string;
  @Input() set mode(value: string){
    if(value === 'edit'){
      this.arrControlName.forEach((nameControl) =>{
        this.form?.get(nameControl)?.enable();
      });
    }else{
      this.arrControlName.forEach((nameControl) =>{
        this.form?.get(nameControl)?.disable();
      });
    }
    this._mode = value;
  }
  get mode(): string{
    return this._mode;
  }

  arrControlName = ['allocatedFsu', 'salary', 'startDate', 'status', 'remarks']
  currentDate = new Date();
  expanded = true;
  toggleIcon = false; // Used for custom icon mat-expansion-panel.
  private destroy$ = new Subject();

  get allocatedFsu() {
    return this.form?.get('allocatedFsu') as FormControl;
  }

  get salary() {
    return this.form?.get('salary') as FormControl;
  }

  get startDate() {
    return this.form?.get('startDate') as FormControl;
  }

  get status() {
    return this.form?.get('status') as FormControl;
  }

  get remarks() {
    return this.form?.get('remarks') as FormControl;
  }

  form!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      allocatedFsu: [{value: '', disabled: true}],
      salary: [{value: '', disabled: true}],
      startDate: [{value: '', disabled: true}],
      status: [{value: '', disabled: true}],
      remarks: [{value: '', disabled: true}]
    })
  }

  expandForExpansion(){
    this.toggleIcon = !this.toggleIcon;
  }
}
