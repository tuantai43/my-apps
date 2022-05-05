import { FormControl } from '@angular/forms';
import { Component, Input } from '@angular/core';

@Component({
  template: '',
})
export abstract class BaseFormComponent {
  @Input() fieldControl: FormControl = new FormControl();
  @Input() label = '';
  @Input() errorList: { [key: string]: string } = {};
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary';

  errorMessage = '';

  defaultErrorList: { [key: string]: string } = {
    required: 'required',
    maxlength: 'maxlength: XXX',
    minlength: 'minlength: XXX',
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
      if (errorKey === 'maxlength' || errorKey === 'minlength') {
        this.errorMessage = this.errorMessage.replace('XXX', this.fieldControl.errors?.[errorKey].requiredLength);
      }
    }
    return invalid;
  }
}
