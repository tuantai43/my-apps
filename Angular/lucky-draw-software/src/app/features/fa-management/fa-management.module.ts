import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { routes } from './fa-management.routing';
import { StoreCoreModule } from '@fa-management/store/core';
import { LayoutModule } from './modules/layout';
import { MatButtonModule } from '@angular/material/button';
import { DirectiveModule } from './libs/directives';
import { TranslateLoader, TranslateModule, TranslateStore } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    StoreCoreModule,
    LayoutModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    MatButtonModule,
    DirectiveModule,
  ],
  providers: [TranslateStore],
})
export class FaManagementModule {}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/fa-management/', '.json');
}
