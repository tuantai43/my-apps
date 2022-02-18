import {DashboardComponent} from './components/dashboard/dashboard.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeroesComponent} from './components/heroes/heroes.component';

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
export class HeroRoutingModule {
}
