import {BaseFormComponent} from './../base-form/base-form.component';
import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-base-input',
  templateUrl: './base-input.component.html',
  styleUrls: ['./base-input.component.scss'],
})
export class BaseInputComponent extends BaseFormComponent {
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
}
