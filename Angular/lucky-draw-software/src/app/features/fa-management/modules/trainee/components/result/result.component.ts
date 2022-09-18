import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-trainee-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
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
  })

  constructor( 
    private location: Location,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  onUpdate(){
    if(this.mode === 'view'){
      this.mode = 'edit';
      this.isEditControl = true;
    }else{
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
