import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-trainee-reward-penalty',
  templateUrl: './reward-penalty.component.html',
  styleUrls: ['./reward-penalty.component.scss']
})
export class RewardPenaltyComponent implements OnInit {
  @Input() formResult!: FormGroup;
  @Input() isEditControl!: boolean;
  private _mode!: string;
  @Input() set mode(value: string){
    if(value === 'edit'){
      this.arrFormReward.controls.forEach((control) =>{
        control.enable();
      })
    }else{
      this.arrFormReward.controls.forEach((control) =>{
        control.disable();
      })
    }
    this._mode = value;
  }
  get mode(): string{
    return this._mode;
  }
  form!: FormGroup;
  expanded = true;
  toggleIcon = true; // Used for custom icon mat-expansion-panel.

  get arrFormReward () {
    return this.form?.get('rewardAndPenalty') as FormArray;
  }

  data = [
    {
      milestone: 'Thg2-22',
      date: '1998/09/26',
      bonusPoint: '10',
      penaltyPoint: '0',
      reason: 'Vì quá đẹp trai!!!'
    },
    {
      milestone: 'Thg3-22',
      date: '1998/09/26',
      bonusPoint: '8',
      penaltyPoint: '0',
      reason: 'Vì quá xuất sắc!!!'
    },
  ]

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      rewardAndPenalty: this.fb.array([]),
    })
    this.initForm();
  }

  addRewardAndPenalty() {
    this.arrFormReward.push(this.fb.group({
      milestone: '',
      date: '',
      bonusPoint: '',
      penaltyPoint: '',
      Reason: ''
    }))
  }

  initForm() {
    if(this.data.length > 0) {
      this.data.forEach((item) =>{
        this.arrFormReward.push(this.fb.group({
          milestone: [{value: item.milestone, disabled: true}],
          date: [{value: item.date, disabled: true}],
          bonusPoint: [{value: item.bonusPoint, disabled: true}],
          penaltyPoint: [{value: item.penaltyPoint, disabled: true}],
          reason: [{value: item.reason, disabled: true}]
        }))
      })
    }
  }

  removeRewardAndPenalty(i: number) {
    this.arrFormReward.removeAt(i);
  }

  expandForExpansion(){
    this.toggleIcon = !this.toggleIcon;
  }

}
