import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-trainee-topic-item',
  templateUrl: './topic-item.component.html',
  styleUrls: ['./topic-item.component.scss']
})
export class TopicItemComponent implements OnInit {

  @Input() item!: any; 
  @Input() index!: Number;
  @Input() isEditControl!: boolean;
  @Input() mode!: string;
  @Output() removeTopic = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  remove(){
    this.removeTopic.emit(this.index);
  }

}
