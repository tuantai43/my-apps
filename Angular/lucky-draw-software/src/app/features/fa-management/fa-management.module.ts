import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FaManagementRoutingModule } from './fa-management-routing.module';
import { FaManagementLayoutModule } from '@app/layout/fa-management-layout/fa-management-layout.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, FaManagementRoutingModule, FaManagementLayoutModule],
})
export class FaManagementModule {}
