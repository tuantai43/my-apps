import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ClassFacade } from '@fa-management/store/class';

@Component({
  selector: 'app-class-statuses',
  host: { class: 'app-class-statuses' },
  templateUrl: './class-statuses.component.html',
  styleUrls: ['./class-statuses.component.scss'],
})
export class ClassStatusesComponent {
  @Input() selected: number | string = 0;
  @Output() selectedChange = new EventEmitter<number>();
  statuses$ = this.classFacade.statuses$;

  constructor(private classFacade: ClassFacade) {}

  onChange(e: number | string) {
    this.selectedChange.emit(Number(e));
  }
}
