import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { LuckyDrawLayoutComponent } from '@app/layout/lucky-draw-layout/lucky-draw-layout.component';

const routes: Routes = [
  {
    path: 'heroes',
    component: AdminLayoutComponent,
    loadChildren: () => import('./features/hero/hero.module').then((m) => m.HeroModule),
  },
  {
    path: 'home',
    component: AdminLayoutComponent,
    loadChildren: () => import('./features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'fa-management',
    loadChildren: () => import('./features/fa-management/fa-management.module').then((m) => m.FaManagementModule),
  },
  {
    path: '',
    component: LuckyDrawLayoutComponent,
    loadChildren: () => import('./features/lucky-draw/lucky-draw.module').then((m) => m.LuckyDrawModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
