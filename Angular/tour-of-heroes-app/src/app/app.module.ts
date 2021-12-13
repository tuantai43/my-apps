import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// modules of apps
import { SharedModule } from './shared';
import { CoreModule } from './core';
// layout
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const APP_MODULES = [SharedModule, CoreModule];

const APP_COMPONENTS = [AdminLayoutComponent];
@NgModule({
  declarations: [AppComponent, ...APP_COMPONENTS],
  imports: [
    ...APP_MODULES,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  exports: [SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
