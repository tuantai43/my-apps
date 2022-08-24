import { Routes } from '@angular/router';
import { LayoutComponent } from '@app/features/fa-management/modules/layout';
import { ListComponent } from './components/list/list.component';

export const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    // children: [
    //   {
    //     path: '',
    //     component: ListComponent,
    //   },
    // ],
  },
];
