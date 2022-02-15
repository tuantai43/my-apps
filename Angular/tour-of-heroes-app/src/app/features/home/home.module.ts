import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '@app/shared';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { WarningAlertComponent } from './components/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './components/success-alert/success-alert.component';
// import { MaterialModule } from 'src/app/material';
const EXPORT_COMPONENTS = [HomeComponent];
@NgModule({
  declarations: [...EXPORT_COMPONENTS, WarningAlertComponent, SuccessAlertComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
