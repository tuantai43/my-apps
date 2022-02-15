import { FormControl } from '@angular/forms';
import { Component, Input } from '@angular/core';

@Component({
  template: '',
})
export abstract class BaseFormComponent {
  @Input() fieldControl: FormControl = new FormControl();
  @Input() label = '';
  @Input() errorList: { [key: string]: string } = {};

  errorMessage = '';

  defaultErrorList: { [key: string]: string } = {
    required: 'You must enter a value',
  };

  checkInvalidField(): boolean {
    const invalid = this.fieldControl.invalid && (this.fieldControl.dirty || this.fieldControl.touched);
    if (!this.fieldControl.disabled && invalid) {
      const errorKey = Object.keys(this.fieldControl.errors || [])[0];
      const customError = this.errorList[errorKey];
      if (customError) {
        this.errorMessage = customError;
      } else {
        const defaultMessage = this.defaultErrorList[errorKey];
        if (defaultMessage) {
          this.errorMessage = defaultMessage;
        } else {
          this.errorMessage = errorKey;
        }
      }
    }
    return invalid;
  }
}
