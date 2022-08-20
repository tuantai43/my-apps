import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';

export const routes: Routes = [
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
    path: 'lucky-draw',
    loadChildren: () => import('./features/lucky-draw/lucky-draw.module').then((m) => m.LuckyDrawModule),
  },
];
