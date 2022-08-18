import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { routes } from './fa-management.routing';
import { StoreCoreModule } from '@fa-management/store/core';
import { FaManagementLayoutModule } from '@app/layout/fa-management-layout';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, StoreCoreModule, FaManagementLayoutModule, RouterModule.forChild(routes)],
})
export class FaManagementModule {}
