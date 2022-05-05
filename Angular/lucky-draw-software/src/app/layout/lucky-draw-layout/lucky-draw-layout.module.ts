import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { LuckyDrawLayoutComponent } from './lucky-draw-layout.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from '@app/shared';
import { SettingComponent } from './components/setting/setting.component';
import { MusicComponent } from './components/setting/components/music/music.component';
import { TranslateModule } from '@ngx-translate/core';
import { A11yModule } from '@angular/cdk/a11y';
import { AuthModule } from '@app/auth/auth.module';
import { LanguageModule } from './components/setting/components/language/language.module';

@NgModule({
  declarations: [HeaderComponent, LuckyDrawLayoutComponent, FooterComponent, SettingComponent, MusicComponent],
  imports: [BrowserModule, RouterModule, SharedModule, TranslateModule, AuthModule, LanguageModule, A11yModule],
})
export class LuckyDrawLayoutModule {}
