import { Routes } from '@angular/router';
import { LayoutComponent } from '@app/features/fa-management/modules/layout';

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
