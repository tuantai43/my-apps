import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from '@app/shared';
import { SettingComponent } from './components/setting/setting.component';
import { MusicComponent } from './components/music/music.component';
import { TranslateModule } from '@ngx-translate/core';
import { A11yModule } from '@angular/cdk/a11y';
import { LanguageModule } from '../language/language.module';
import { CommonModule } from '@angular/common';
import { AuthModule } from '../auth/auth.module';

@NgModule({
  declarations: [HeaderComponent, LayoutComponent, FooterComponent, SettingComponent, MusicComponent],
  imports: [CommonModule, RouterModule, SharedModule, TranslateModule, AuthModule, LanguageModule, A11yModule],
})
export class LayoutModule {}
