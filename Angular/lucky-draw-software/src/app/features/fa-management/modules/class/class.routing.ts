import { Routes } from '@angular/router';
import { LayoutComponent } from '@fa-management/layout';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
      },
    ],
  },
];
