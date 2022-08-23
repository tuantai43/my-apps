import { Component } from '@angular/core';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthFacade } from '@lucky-draw/store/auth';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  isLogged$ = this.authFacade.isLogged$;

  constructor(private dialog: MatDialog, private authFacade: AuthFacade) {
    this.authFacade.loadAuth();
  }

  doLogout() {
    this.authFacade.doLogout();
  }

  test() {
    this.authFacade.loadAuth();
  }

  openLogin() {
    this.dialog.open(FormLoginComponent, {
      panelClass: 'lucky-theme',
      width: '500px',
      autoFocus: false,
      disableClose: true,
    });
  }
}
