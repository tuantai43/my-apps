import { 
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  ViewChild,
  ViewChildren,
  QueryList
} from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-trainee-milestone-config',
  templateUrl: './milestone-config.component.html',
  styleUrls: ['./milestone-config.component.scss']
})
export class MilestoneConfigComponent implements OnInit, OnChanges {
  @ViewChild('milestone') blockMilestone! : ElementRef<HTMLElement>
  @ViewChildren('blockTopic') blockTopic! : QueryList<any>
  // @Input() mode : string = 'view';
  private _mode!: string;

  @Input() set mode(value: string) {
    this._mode = value;
    if(value === 'view'){
      this.formArrayMilestone?.controls.forEach((control) =>{
        control.disable();
      })
    }else{
      this.formArrayMilestone?.controls.forEach((control) =>{
        control.enable();
      })
    }
  }
  get mode(): string {
    return this._mode;
  }

  @Input() formResult : FormGroup = new FormGroup({});
  @Input() isEditControl = false;
  @Input() dataMilestone: any;
  expanded = true;
  toggleIcon = false; // Used for custom icon mat-expansion-panel.
  expandMilestone = true;
  expandTopic = true;

  get formArrayMilestone () {
    return this.formResult.get('milestone') as FormArray;
  }

  get formArrayTopic () {
    return this.formArrayMilestone.get('topic') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.dataMilestone);
    this.formResult.addControl('milestone', new FormArray([
      this.newMilestone()
    ]));
  }

  ngOnChanges(changes: any) {
    if(changes.mode && changes.mode.previousValue && changes.mode.previousValue === 'view'){

    }
  }

  newMilestone () {
    return this.fb.group({
      milestoneName: 'sssss',
      salary: '',
      startDate: '',
      endDate: '',
      expanded: true,
      topic: this.fb.array([
        this.fb.group({
          topicName: '',
          maxScore: '',
          passingScore: '',
          weightedNumber: '',
        })
      ]),
    })
  }

  addMilestone(){
    this.formArrayMilestone.push(this.newMilestone());
  }
  
  removeMilestone(index: number){
    this.formArrayMilestone.removeAt(index);
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
    return this.formArrayMilestone.at(empIndex).get('topic') as FormArray
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
    if(this.formArrayMilestone.controls.length > 0){
      this.expandMilestone = !this.expandMilestone;
      if(!this.expandMilestone) {
        this.blockMilestone.nativeElement.setAttribute('style',
          'display: none; transition: opacity 1s ease-out'
        )
      }else{
        this.blockMilestone.nativeElement.setAttribute('style',
          'display: block; transition: opacity 1s ease-out'
        )
      }
    }
  }

  toggleTopic(indexMilestone: number) {
    if(this.formArrayMilestone.controls[indexMilestone].get('expanded')?.value){
      this.blockTopic.toArray()[indexMilestone].nativeElement.setAttribute('style',
        'display: none; transition: opacity 1s ease-out'
      );
      this.formArrayMilestone.controls[indexMilestone].get('expanded')?.setValue(!this.formArrayMilestone.controls[indexMilestone].get('expanded')?.value);
    }else{
      this.blockTopic.toArray()[indexMilestone].nativeElement.setAttribute('style',
        'display: block; transition: opacity 1s ease-out'
      );
      this.formArrayMilestone.controls[indexMilestone].get('expanded')?.setValue(!this.formArrayMilestone.controls[indexMilestone].get('expanded')?.value);
    }
  }
}
