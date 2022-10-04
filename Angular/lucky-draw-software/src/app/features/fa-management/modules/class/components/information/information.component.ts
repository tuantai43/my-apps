import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ClassDetails, initialClassDetail } from '../../store';
import { ScreenName } from '@fa-management/utils/enums';

@Component({
  selector: 'app-information',
  host: { class: 'app-information' },
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss'],
})
export class InformationComponent implements OnInit {
  @Input() class: ClassDetails | null = initialClassDetail();
  @Input() form: FormGroup = new FormGroup({});
  @Input() acronym: string = '';
  @Input() screenName!: ScreenName;

  constructor() {}

  ngOnInit(): void {}
}
