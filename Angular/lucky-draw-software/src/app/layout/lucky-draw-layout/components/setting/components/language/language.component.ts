import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LanguageListComponent } from './components/language-list/language-list.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss'],
})
export class LanguageComponent {
  constructor(public dialog: MatDialog, public translate: TranslateService) {
    translate.use('en');
  }

  openDialog() {
    this.dialog.open(LanguageListComponent, {});
  }
}
