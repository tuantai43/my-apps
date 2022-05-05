import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageComponent } from './language.component';
import { LanguageListComponent } from './components/language-list/language-list.component';
import { SharedModule } from '@app/shared';

@NgModule({
  declarations: [LanguageComponent, LanguageListComponent],
  imports: [CommonModule, SharedModule, TranslateModule],
  exports: [LanguageComponent],
})
export class LanguageModule {}
