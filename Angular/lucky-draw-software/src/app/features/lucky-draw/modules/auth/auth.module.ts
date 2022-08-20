import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { SharedModule } from '@app/shared';
import { StoreAuthModule } from '../../libs/store/auth';

@NgModule({
  declarations: [AuthComponent, FormLoginComponent],
  imports: [CommonModule, TranslateModule, SharedModule, StoreAuthModule],
  exports: [AuthComponent],
})
export class AuthModule {}
