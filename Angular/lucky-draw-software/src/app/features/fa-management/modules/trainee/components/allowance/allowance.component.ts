import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-trainee-allowance',
  templateUrl: './allowance.component.html',
  styleUrls: ['./allowance.component.scss']
})
export class AllowanceComponent implements OnInit {
  @Input() formResult!: FormGroup;
  @Input() isEditControl!: boolean;
  private _mode!: string;
  @Input() set mode(value: string){
    // value === 'edit' ? this.form.get('remarks')?.enable() : this.form.get('remarks')?.disable();
    this._mode = value;
  }
  get mode(): string{
    return this._mode;
  }

  expanded = true;
  toggleIcon = false; // Used for custom icon mat-expansion-panel.
  private destroy$ = new Subject();
  form!: FormGroup;

  data = [
    {
      milestone: 'Thg2-22',
      gpa: 65,
      level: 'C',
      salaryPaid: 'Yes',
      standardAllowance: 3000000,
      remarks: ''
    },
    {
      milestone: 'Thg3-22',
      gpa: 75,
      level: 'B',
      salaryPaid: 'Yes',
      standardAllowance: 4000000,
      remarks: ''
    },
    {
      milestone: 'Thg4-22',
      gpa: 85,
      level: 'A',
      salaryPaid: 'Yes',
      standardAllowance: 5000000,
      remarks: ''
    }
  ]

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      remarks: [{value: '', disabled: true}]
    })
  }
  
  expandForExpansion(){
    this.toggleIcon = !this.toggleIcon;
  }

}
