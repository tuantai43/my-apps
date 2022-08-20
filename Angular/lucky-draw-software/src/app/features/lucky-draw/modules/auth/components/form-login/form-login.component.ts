import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BaseComponent } from '@app/shared/components/base/base.component';
import { filter, take, takeUntil, Subscription } from 'rxjs';
import { AuthFacade } from '@lucky-draw/store/auth';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss'],
})
export class FormLoginComponent extends BaseComponent {
  error$ = this.authFacade.error$;
  isLoading$ = this.authFacade.loading$;
  registered = false;
  formLogin: FormGroup = new FormGroup({
    email: new FormControl('admin@lucky.com', [Validators.required, Validators.email, Validators.maxLength(50)]),
    password: new FormControl('123456', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
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
  subscription: Subscription = new Subscription();

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

  constructor(private dialogRef: MatDialogRef<FormLoginComponent>, private authFacade: AuthFacade) {
    super();
    this.authFacade.resetError();
  }

  checkFormValid() {
    this.subscription.unsubscribe();
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
      const { email, password } = this.formLogin.value;
      this.subscription = this.authFacade.isLogged$
        .pipe(
          takeUntil(this.destroy$),
          filter((loaded) => loaded),
          take(1)
        )
        .subscribe(() => this.dialogRef.close());
      this.authFacade.doLogin({ email, password });
    }
  }

  doSignUp() {
    if (this.checkFormValid()) {
      const { email, password, firstNameControl: firstName, lastNameControl: lastName } = this.formLogin.value;
      this.subscription = this.authFacade.registered$
        .pipe(
          takeUntil(this.destroy$),
          filter((registered) => registered),
          take(1)
        )
        .subscribe(() => {
          this.registered = true;
        });
      this.authFacade.doRegister({ email, password, firstName, lastName });
    }
  }
}
