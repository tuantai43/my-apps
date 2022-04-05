import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent {
  formLogin: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  errorList = {
    email: {
      required: 'e01',
    },
    password: {
      required: 'e02'
    }
  }

  get emailControl() {
    return this.formLogin.get('email') as FormControl;
  }

  get passwordControl() {
    return this.formLogin.get('password') as FormControl;
  }

  constructor(
    private dialogRef: MatDialogRef<FormLoginComponent>
  ) {
  }

  doLogin() {
    this.dialogRef.close()
  }
}
