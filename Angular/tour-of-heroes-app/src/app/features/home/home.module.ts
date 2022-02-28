import {HomeRoutingModule} from './home-routing.module';
import {SharedModule} from '@app/shared';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';

const EXPORT_COMPONENTS = [HomeComponent];

@NgModule({
  declarations: [...EXPORT_COMPONENTS],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {
}
