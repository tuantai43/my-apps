import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { LuckyDrawLayoutComponent } from './lucky-draw-layout.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from '@app/shared';
import { SettingComponent } from './components/setting/setting.component';
import { MusicComponent } from './components/setting/components/music/music.component';
import { LanguageComponent } from './components/setting/components/language/language.component';
import { TranslateModule } from '@ngx-translate/core';
import {
  LanguageListComponent
} from './components/setting/components/language/components/language-list/language-list.component';
import { A11yModule } from '@angular/cdk/a11y';


@NgModule({
  declarations: [
    HeaderComponent,
    LuckyDrawLayoutComponent,
    FooterComponent,
    SettingComponent,
    MusicComponent,
    LanguageComponent,
    LanguageListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    SharedModule,
    TranslateModule,
    A11yModule
  ]
})
export class LuckyDrawLayoutModule {
}
