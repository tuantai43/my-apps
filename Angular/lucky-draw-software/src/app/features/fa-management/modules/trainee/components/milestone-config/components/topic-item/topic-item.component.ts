import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-trainee-topic-item',
  templateUrl: './topic-item.component.html',
  styleUrls: ['./topic-item.component.scss']
})
export class TopicItemComponent implements OnInit {

  @Input() item!: any; 
  @Input() index!: Number;
  @Input() isEditControl!: boolean;
  @Output() removeTopic = new EventEmitter();

  mode = 'view';
  constructor() { }

  ngOnInit(): void {
    console.log(this.item)
  }

  remove(){
    this.removeTopic.emit(this.index);
  }

}
