import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.scss']
})
export class SlotsComponent {
  @Input() toggleRandom = false;

  slotsLength = new Array(6);
}
