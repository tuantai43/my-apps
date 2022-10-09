import { 
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  ViewChildren,
  QueryList
} from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MilestoneConfig, TraineeResult } from '@app/features/fa-management/libs/utils/models';

@Component({
  selector: 'app-trainee-milestone-config',
  templateUrl: './milestone-config.component.html',
  styleUrls: ['./milestone-config.component.scss']
})
export class MilestoneConfigComponent implements OnInit {
  @ViewChild('milestone') blockMilestone! : ElementRef<HTMLElement>
  @ViewChildren('blockTopic') blockTopic! : QueryList<any>
  // @Input() mode : string = 'view';
  private _mode!: string;
  @Input() formResult!: FormGroup;

  @Input() set mode(value: string) {
    this._mode = value;
    if(value === 'view'){
      (this.formResult?.get('milestone') as FormArray)?.controls.forEach((control) =>{
        control.disable();
      })
    }else{
      (this.formResult?.get('milestone') as FormArray)?.controls.forEach((control) =>{
        control.enable();
      })
    }
  }
  get mode(): string {
    return this._mode;
  }

  @Input() isEditControl = false;
  @Input() dataMilestone!: MilestoneConfig;
  expanded = true;
  toggleIcon = false; // Used for custom icon mat-expansion-panel.
  expandMilestone = true;
  expandTopic = true;


  get formMilestone () {
    return this.formResult?.get('milestone') as FormArray;
  }

  get formArrayTopic () {
    return this.formResult?.get('milestone')?.get('topic') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // this.formResult.addControl('milestone', new FormArray([]));
    // console.log(this.formResult)
    // this.formResult = this.fb.group({
    //   milestone: this.fb.array
    // })
    this.initForm();
    // console.log(this.formResult.value)
  }

  initForm() {
    if (this.dataMilestone.milestone.length > 0) {
      this.dataMilestone.milestone.forEach((ms, indexMilestone) =>{
        this.formMilestone.push(this.fb.group({
          milestoneName: [{value: ms.milestoneName, disabled: true}],
          salary: [{value: ms.salaryPaid, disabled: true}],
          startDate: [{value: new Date(ms.startDate), disabled: true}],
          endDate: [{value: new Date(ms.endDate), disabled: true}],
          expanded: true,
          topic: this.fb.array([]),
        }));
        if (ms.topic.length > 0){
          ms.topic.forEach((tp) =>{
            this.topicMilestone(indexMilestone).push(this.fb.group({
              topicName: [{value: tp.topicName, disabled: true}],
              maxScore: [{value: tp.maxScore, disabled: true}],
              passingScore: [{value: tp.passingScore, disabled: true}],
              weightedNumber: [{value: tp.weightedNumber, disabled: true}],
            }))
          })
        }
      })
    }
  }

  newMilestone () {
    return this.fb.group({
      milestoneName: '',
      salary: '',
      startDate: '',
      endDate: '',
      expanded: true,
      topic: this.fb.array([]),
    })
  }

  addMilestone(){
    this.formMilestone.push(this.newMilestone());
  }
  
  removeMilestone(index: number){
    this.formMilestone.removeAt(index);
  }

  newTopic () {
    return this.fb.group({
      topicName: '',
      maxScore: '',
      passingScore: '',
      weightedNumber: ''
    })
  }

  topicMilestone(empIndex:number) : FormArray {
    return this.formMilestone.at(empIndex).get('topic') as FormArray
  }

  addTopic(indexMilestone: number) {
    this.topicMilestone(indexMilestone).push(this.newTopic());
  }

  removeTopic(indexMilestone: number, indexTopic: number) {
    this.topicMilestone(indexMilestone).removeAt(indexTopic);
  }

  expandForExpansion(){
    this.toggleIcon = !this.toggleIcon;
  }

  toggleMilestone() {
    if(this.formMilestone.controls.length > 0){
      this.expandMilestone = !this.expandMilestone;
      if(!this.expandMilestone) {
        this.blockMilestone.nativeElement.setAttribute('style',
          'display: none; transition: opacity 1s ease-out'
        )
        // this.blockMilestone.nativeElement.classList.add('custom-collapse');
        // this.blockMilestone.nativeElement.classList.remove('custom-expanded');
      }else{
        this.blockMilestone.nativeElement.setAttribute('style',
          'display: block; transition: opacity 1s ease-out'
        )
        // this.blockMilestone.nativeElement.classList.remove('custom-collapse');
        // this.blockMilestone.nativeElement.classList.add('custom-expanded');
      }
    }
  }

  toggleTopic(indexMilestone: number) {
    if(this.formMilestone.controls[indexMilestone].get('expanded')?.value){
      this.blockTopic.toArray()[indexMilestone].nativeElement.setAttribute('style',
        'display: none; transition: opacity 1s ease-out'
      );
      this.formMilestone.controls[indexMilestone].get('expanded')?.setValue(!this.formMilestone.controls[indexMilestone].get('expanded')?.value);
    }else{
      this.blockTopic.toArray()[indexMilestone].nativeElement.setAttribute('style',
        'display: block; transition: opacity 1s ease-out'
      );
      this.formMilestone.controls[indexMilestone].get('expanded')?.setValue(!this.formMilestone.controls[indexMilestone].get('expanded')?.value);
    }
  }
}
