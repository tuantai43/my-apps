import { Component, Input, OnInit } from '@angular/core';
import { ClassDetails, initialClassDetail } from '../../store';

@Component({
  selector: 'app-information',
  host: { class: 'app-information' },
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss'],
})
export class InformationComponent implements OnInit {
  @Input() class: ClassDetails | null = initialClassDetail();

  constructor() {}

  ngOnInit(): void {}
}
