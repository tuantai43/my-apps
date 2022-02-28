import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
// modules of apps
import {SharedModule} from './shared';
import {CoreModule} from './core';
// layout
import {AdminLayoutModule} from '@app/layout/admin-layout/admin-layout.module';
import {LuckyDrawLayoutModule} from '@app/layout/lucky-draw-layout/lucky-draw-layout.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

const APP_MODULES = [SharedModule, CoreModule, AdminLayoutModule, LuckyDrawLayoutModule];


@NgModule({
  declarations: [AppComponent],
  imports: [...APP_MODULES, BrowserModule, AppRoutingModule, BrowserAnimationsModule, HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })],
  exports: [SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}

// AOT compilation support
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
