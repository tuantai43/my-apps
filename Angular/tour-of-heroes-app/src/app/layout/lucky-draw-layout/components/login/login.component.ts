import {Component} from '@angular/core';
import {FormLoginComponent} from './components/form-login/form-login.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(public dialog: MatDialog) {
  }

  openLogin() {
    this.dialog.open(FormLoginComponent, {
      width: '500px',
      autoFocus: false
    });
  }
}
