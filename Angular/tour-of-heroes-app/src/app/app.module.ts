import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
// modules of apps
import {SharedModule} from './shared';
import {CoreModule} from './core';
// layout
import {AdminLayoutModule} from "@app/layout/admin-layout/admin-layout.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const APP_MODULES = [SharedModule, CoreModule, AdminLayoutModule];


@NgModule({
  declarations: [AppComponent],
  imports: [...APP_MODULES, BrowserModule, AppRoutingModule, BrowserAnimationsModule, HttpClientModule],
  exports: [SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
