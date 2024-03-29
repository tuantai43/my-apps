import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { SlotsComponent } from './components/slots/slots.component';
import { SlotComponent } from './components/slots/components/slot/slot.component';
import { SharedModule } from '@app/shared';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '@lucky-draw/interceptors';
import { LayoutModule } from './modules/layout/layout.module';
import { RouterModule } from '@angular/router';
import { routes } from './lucky-draw.routing';
import { AuthService } from './libs/services';
import { TranslateLoader, TranslateModule, TranslateStore } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AuthModule } from './modules/auth';

@NgModule({
  declarations: [HomeComponent, SlotsComponent, SlotComponent],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    AuthModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient],
      },
    }),
    RouterModule.forChild(routes),
    LayoutModule,
  ],
  providers: [
    TranslateStore,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    AuthService,
  ],
})
export class LuckyDrawModule {}

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
