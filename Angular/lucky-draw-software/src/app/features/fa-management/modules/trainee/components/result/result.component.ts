import { Location } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TraineeDetailsService } from '@app/features/fa-management/libs/services';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-trainee-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  @Input() emplId!: number;
  mode = 'view';
  isEditControl = false;

  formResult = this.fb.group({
    // milestone: this.fb.array([]),
    // attendance: this.fb.group({}),
    // topic: this.fb.group({}),
    // rewardAndPenalty: this.fb.array([]),
    // gpa: this.fb.group({}),
    // commitment: this.fb.group({}),
    // allowance: this.fb.group({}),
    // allocation: this.fb.group({}),
  });

  private destroy$ = new Subject();

  constructor( 
    private location: Location,
    private fb: FormBuilder,
    private traineeDetailsService: TraineeDetailsService
  ) { }

  resultMilestone: any;

  ngOnInit(): void {
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
      this.location.back();
    } else {
      this.mode = 'view';
      this.isEditControl = false;
    }
  }

}
