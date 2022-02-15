import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    loadChildren: () => import('./features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'heroes',
    component: AdminLayoutComponent,
    loadChildren: () => import('./features/heroes/heroes.module').then((m) => m.HeroesModule),
  },
  {
    path: 'home',
    component: AdminLayoutComponent,
    loadChildren: () => import('./features/home/home.module').then((m) => m.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
