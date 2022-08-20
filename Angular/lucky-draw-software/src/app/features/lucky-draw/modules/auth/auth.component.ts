import { Component, OnInit } from '@angular/core';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthFacade } from '@lucky-draw/store/auth';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  isLogged$ = this.authFacade.isLogged$;

  constructor(private dialog: MatDialog, private authFacade: AuthFacade) {}

  ngOnInit() {
    this.authFacade.loadToken();
  }

  doLogout() {
    this.authFacade.doLogout();
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
