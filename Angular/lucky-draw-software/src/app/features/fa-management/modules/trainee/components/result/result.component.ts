import { Location } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TraineeDetailsService } from '@app/features/fa-management/libs/services';
import { TraineeResult } from '@app/features/fa-management/libs/utils/models';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-trainee-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  @Input() emplId!: string;
  mode = 'view';
  isEditControl = false;
  selectedTabClassIndex = 0;

  formResult!: FormGroup;

  private destroy$ = new Subject();

  constructor( 
    private route: Router,
    private fb: FormBuilder,
    private traineeDetailsService: TraineeDetailsService
  ) { }

  resultMilestone!: TraineeResult[];

  ngOnInit(): void {
    this.formResult = this.fb.group({
      milestone: this.fb.array([]),
      // attendance: this.fb.group({}),
      // topic: this.fb.group({}),
      // rewardAndPenalty: this.fb.array([]),
      // gpa: this.fb.group({}),
      // commitment: this.fb.group({}),
      // allowance: this.fb.group({}),
      // allocation: this.fb.group({}),
    });
    this.traineeDetailsService.getTraineeResult(this.emplId).pipe(takeUntil(this.destroy$))
      .subscribe((val) =>{
        this.resultMilestone = val;
      })
  }

  onUpdate(){
    if(this.mode === 'view'){
      this.mode = 'edit';
      this.isEditControl = true;
    }else{
      console.log(this.formResult.getRawValue())
      // handle update trainee...
    }
  }

  onDelete() {}

  onClose(){
    if(this.mode === 'view'){
      this.route.navigate(['/fa-management/trainee-management'])
    } else {
      this.mode = 'view';
      this.isEditControl = false;
    }
  }

  onTabChanged(e: any) {
  }

}
