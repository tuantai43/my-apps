import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes.component';
const routes: Routes = [
  {
    path: '',
    component: HeroesComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
