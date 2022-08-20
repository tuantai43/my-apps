import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { SlotsComponent } from './components/slots/slots.component';
import { SlotComponent } from './components/slots/components/slot/slot.component';
import { SharedModule } from '@app/shared';
import { StoreAuthModule } from '@lucky-draw/store/auth';
import { HttpClient, HttpClientModule, HttpHandler, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '@lucky-draw/interceptors';
import { LayoutModule } from './modules/layout/layout.module';
import { RouterModule } from '@angular/router';
import { routes } from './lucky-draw.routing';
import { AuthService } from './libs/services';
import { TranslateLoader, TranslateModule, TranslateStore } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  declarations: [HomeComponent, SlotsComponent, SlotComponent],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
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
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
})
export class LuckyDrawModule {}

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
