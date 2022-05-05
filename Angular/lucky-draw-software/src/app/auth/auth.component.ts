import { Component } from '@angular/core';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  constructor(private dialog: MatDialog) {}

  openLogin() {
    this.dialog.open(FormLoginComponent, {
      width: '500px',
      autoFocus: false,
      disableClose: true,
    });
  }
}
