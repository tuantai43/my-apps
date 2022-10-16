import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { distinctUntilChanged, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-trainee-reward-penalty',
  templateUrl: './reward-penalty.component.html',
  styleUrls: ['./reward-penalty.component.scss']
})
export class RewardPenaltyComponent implements OnInit, OnDestroy {
  @Input() formResult!: FormGroup;
  @Input() isEditControl!: boolean;
  private _mode!: string;
  @Input() set mode(value: string){
    if(value === 'edit'){
      this.arrFormReward.controls.forEach((control) =>{
        control.enable();
        this.initStatusControlBonusAndPen(control.get('bonusPoint')?.value, (control.get('penaltyPoint') as AbstractControl))
        this.initStatusControlBonusAndPen(control.get('penaltyPoint')?.value, (control.get('bonusPoint') as AbstractControl))
      })
    }else{
      this.arrFormReward?.controls?.forEach((control) =>{
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
  toggleIcon = false; // Used for custom icon mat-expansion-panel.
  private destroy$ = new Subject();

  get arrFormReward () {
    return this.form?.get('rewardAndPenalty') as FormArray;
  }

  currentDate = new Date();


  data = [
    {
      milestone: 'Thg2-22',
      date: '1998/09/26',
      bonusPoint: 10,
      penaltyPoint: 0,
      reason: 'Vì quá đẹp trai!!!'
    },
    {
      milestone: 'Thg3-22',
      date: '1998/09/26',
      bonusPoint: 0,
      penaltyPoint: 1,
      reason: 'Vì quá ham chơi!!!'
    },
  ]

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      rewardAndPenalty: this.fb.array([]),
    })
    this.initForm();
    this.handleFormChange();
  }

  addRewardAndPenalty() {
    this.arrFormReward.push(this.fb.group({
      milestone: '',
      date: '',
      bonusPoint: [0, [Validators.maxLength(2)]],
      penaltyPoint: [0, [Validators.maxLength(2)]],
      reason: ''
    }))
    this.handleFormChange();
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

  initStatusControlBonusAndPen (controlCheck: number, controlAffect: AbstractControl) {
    controlCheck && controlCheck !== 0 ? controlAffect.disable() : controlAffect.enable();
  }

  handleFormChange() {
    this.arrFormReward.controls.forEach((control) =>{
      this.handleControlChange((control.get('bonusPoint') as AbstractControl) , (control.get('penaltyPoint') as AbstractControl))
      this.handleControlChange((control.get('penaltyPoint') as AbstractControl) , (control.get('bonusPoint') as AbstractControl))
    })
  }

  // This function used for handle disable bonusPoint control or penaltyPoint control
  handleControlChange(controlChange: AbstractControl, controlAffect: AbstractControl) {
    controlChange.valueChanges.pipe(distinctUntilChanged() ,takeUntil(this.destroy$)).subscribe((val) =>{
      val && val !== 0 ? controlAffect.disable() : controlAffect.enable();
    })
  }

  removeRewardAndPenalty(i: number) {
    this.arrFormReward.removeAt(i);
  }

  expandForExpansion(){
    this.toggleIcon = !this.toggleIcon;
  }

  ngOnDestroy(){
    this.destroy$.next(null);
  }

}
