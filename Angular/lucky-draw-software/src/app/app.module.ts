import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { routes } from './app.routing';
import { AppComponent } from './app.component';
// modules of apps
import { SharedModule } from './shared';
import { CoreModule } from './core';
// layout
import { AdminLayoutModule } from '@app/layout/admin-layout/admin-layout.module';
import { LuckyDrawLayoutModule } from '@app/layout/lucky-draw-layout/lucky-draw-layout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    SharedModule,
    CoreModule,
    AdminLayoutModule,
    LuckyDrawLayoutModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient],
      },
    }),
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

// AOT compilation support
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
