import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { routes } from './fa-management.routing';
import { StoreCoreModule } from '@fa-management/store/core';
import { LayoutModule } from './modules/layout';
import { MatButtonModule } from '@angular/material/button';
import { DirectiveModule } from './libs/directives';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    StoreCoreModule,
    LayoutModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    DirectiveModule,
  ],
})
export class FaManagementModule {}
