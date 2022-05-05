import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { BaseComponent } from '@app/shared/components/base/base.component';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss'],
  providers: [AuthService],
})
export class FormLoginComponent extends BaseComponent {
  formLogin: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(50)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
    firstNameControl: new FormControl({ value: '', disabled: true }, Validators.required),
    lastNameControl: new FormControl({ value: '', disabled: true }, Validators.required),
  });

  errorList = {
    email: {
      required: 'e01',
      email: 'e04',
    },
    password: {
      required: 'e02',
    },
    firstName: {
      required: 'e05',
    },
    lastName: {
      required: 'e06',
    },
  };

  hidePassword = true;
  isLoginForm = true;

  get emailControl() {
    return this.formLogin.get('email') as FormControl;
  }

  get passwordControl() {
    return this.formLogin.get('password') as FormControl;
  }

  get firstNameControl() {
    return this.formLogin.get('firstNameControl') as FormControl;
  }

  get lastNameControl() {
    return this.formLogin.get('lastNameControl') as FormControl;
  }

  constructor(private dialogRef: MatDialogRef<FormLoginComponent>, private authService: AuthService) {
    super();
  }

  checkFormValid() {
    this.formLogin.markAllAsTouched();
    return !this.formLogin.invalid;
  }

  onSwitchMode() {
    this.isLoginForm = !this.isLoginForm;
    this.formLogin.reset();
    if (this.isLoginForm) {
      this.firstNameControl.disable();
      this.lastNameControl.disable();
    } else {
      this.firstNameControl.enable();
      this.lastNameControl.enable();
    }
  }

  doLogin() {
    if (this.checkFormValid()) {
      this.isLoading = true;
      this.authService
        .login(this.emailControl.value, this.passwordControl.value)
        .pipe(takeUntil(this.destroy$))
        .subscribe(
          (value) => {
            console.log(value);
            this.isLoading = false;
          },
          (err) => {
            console.log(err);
            this.isLoading = false;
          }
        );
      // this.dialogRef.close();
    }
  }

  doSignUp() {
    if (this.checkFormValid()) {
      this.isLoading = true;
      this.authService
        .register(
          this.emailControl.value,
          this.passwordControl.value,
          this.firstNameControl.value,
          this.lastNameControl.value
        )
        .pipe(takeUntil(this.destroy$))
        .subscribe(
          (value) => {
            console.log(value);
            this.isLoading = false;
          },
          (err) => {
            console.log(err);
            this.isLoading = false;
          }
        );
    }
  }
}
