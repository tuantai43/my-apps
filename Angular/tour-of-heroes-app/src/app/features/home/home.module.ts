import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
// import { MaterialModule } from 'src/app/material';
const EXPORT_COMPONENTS = [HomeComponent];
@NgModule({
  declarations: [...EXPORT_COMPONENTS],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
