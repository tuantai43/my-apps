import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { SelectionTable } from '@app/features/fa-management/libs/utils/functions';
import { topicMark } from '@app/features/fa-management/libs/utils/models';

@Component({
  selector: 'app-trainee-topic-mark',
  templateUrl: './topic-mark.component.html',
  styleUrls: ['./topic-mark.component.scss']
})
export class TopicMarkComponent implements OnInit {

  @Input() formResult!: FormGroup;
  @Input() dataTopicMark!: topicMark[];
  @Input() isEditControl!: boolean;
  private _mode!: string;
  @Input() set mode(value: string){
    if(value === 'edit'){
      this.arrFormTopicScore.controls.forEach((control) =>{
        control.enable();
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
  selectionTable = new SelectionTable<any>([], [], true);
  dataAfterFormat: any = [];

  displayedColumns: string[] = [
    'name',
    'absentTime',
    'lateAndEarlyLeave', 
    'noPermissionsRate', 
    'disciplinaryPoint',
  ];

  get arrFormTopicScore () {
    return this.form.get('topicScore') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      topicScore: this.fb.array([]),
    })
    this.initForm();
  }

  initForm() {
    if(this.dataTopicMark.length > 0){
      this.dataTopicMark.forEach((item, indexMilestone) =>{
        this.arrFormTopicScore.push(this.fb.group({
          milestoneName: [{value: item.milestoneName, disabled: true}],
          sum: [{value: item.sum, disabled: true}],
          topicScoreItem: this.fb.array([]),
        }));
        if(item.topicScore.length > 0) {
          item.topicScore.forEach((tpc) =>{
            this.topicScoreItem(indexMilestone).push(this.fb.group({
              name: [{value: tpc.name, disabled: true}],
              score: [{value: tpc.score, disabled: true}]
            }))
          })
        }
      })
    }
  }

  topicScoreItem(indexMilestone: number) : FormArray {
    return this.arrFormTopicScore.at(indexMilestone).get('topicScoreItem') as FormArray
  }

  expandForExpansion(){
    this.toggleIcon = !this.toggleIcon;
  }

}
