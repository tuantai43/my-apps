import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-trainee-commitment',
  templateUrl: './commitment.component.html',
  styleUrls: ['./commitment.component.scss']
})
export class CommitmentComponent implements OnInit {
  @Input() formResult!: FormGroup;
  @Input() isEditControl!: boolean;
  private _mode!: string;
  @Input() set mode(value: string){
    value === 'edit' ? this.form?.get('remarks')?.enable() : this.form?.get('remarks')?.disable();
    this._mode = value;
  }
  get mode(): string{
    return this._mode;
  }

  expanded = true;
  toggleIcon = false; // Used for custom icon mat-expansion-panel.
  private destroy$ = new Subject();

  form!: FormGroup;

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
