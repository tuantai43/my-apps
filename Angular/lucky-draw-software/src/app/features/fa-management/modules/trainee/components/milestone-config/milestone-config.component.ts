import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import {
  AUTO_STYLE,
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

const DEFAULT_DURATION = 300;

@Component({
  selector: 'app-trainee-milestone-config',
  templateUrl: './milestone-config.component.html',
  styleUrls: ['./milestone-config.component.scss'],
  animations: [
    trigger('collapse', [
      state('false', style({ height: AUTO_STYLE, visibility: AUTO_STYLE })),
      state('true', style({ height: '0', visibility: 'hidden' })),
      transition('false => true', animate(DEFAULT_DURATION + 'ms ease-in')),
      transition('true => false', animate(DEFAULT_DURATION + 'ms ease-out'))
    ])
  ]
})
export class MilestoneConfigComponent implements OnInit, OnChanges {
  @Input() mode : string = 'view';
  @Input() formResult : FormGroup = new FormGroup({});
  @Input() isEditControl = false;
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
    this.formResult.addControl('milestone', new FormArray([]));
  }

  ngOnChanges(changes: any) {
    if(changes.mode && changes.mode.previousValue && changes.mode.previousValue === 'view'){

    }
    console.log('changes...', changes);
    // console.log('mode', this.mode);
  }

  newMilestone () {
    return this.fb.group({
      milestoneName: '',
      salary: '',
      startDate: '',
      endDate: '',
      topic: this.fb.array([
        this.fb.group({
          topicName: '',
          maxScore: '',
          passingScore: '',
          weightedNumber: ''
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
    console.log(this.formArrayMilestone)
    console.log(this.formArrayTopic)
  }

  removeTopic(indexMilestone: number, indenTopic: number) {
    this.topicMilestone(indexMilestone).removeAt(indenTopic);
  }

  expand(){
    this.toggleIcon = !this.toggleIcon;
  }

  toggleMilestone() {
    this.expandMilestone = !this.expandMilestone;
  }

  indexForTopic: number = -1;
  toggleTopic(indexMilestone: number) {
    this.indexForTopic = indexMilestone;
    if(this.indexForTopic === indexMilestone){
      this.expandTopic = !this.expandTopic;
    }
  }

  expandedTopic(indexMilestone: number){
    if(this.indexForTopic === indexMilestone){
      this.expandTopic = true;
    }
    this.indexForTopic = indexMilestone;
  }

  collapseTopic(indexMilestone: number){
    if(this.indexForTopic === indexMilestone){
      this.expandTopic = false;
    }
    this.indexForTopic = indexMilestone;
  }
}
