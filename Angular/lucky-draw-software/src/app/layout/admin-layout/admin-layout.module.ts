import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AdminLayoutComponent} from './admin-layout.component';
import {HeaderComponent} from './components/header/header.component';
import {RouterModule} from '@angular/router';

const APP_COMPONENTS = [AdminLayoutComponent];

@NgModule({
  declarations: [...APP_COMPONENTS, HeaderComponent],
  imports: [BrowserModule, RouterModule],
  exports: [
    HeaderComponent
  ],
  providers: [],
  bootstrap: [],
})
export class AdminLayoutModule {
}
