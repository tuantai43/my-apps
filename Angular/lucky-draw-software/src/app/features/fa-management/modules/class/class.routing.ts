import { Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { ListComponent } from './components/list/list.component';
import { ScreenName } from '@fa-management/utils/enums';

export const RELATIVE_URL = '/fa-management/class-management';

export const routes: Routes = [
  {
    path: '',
    component: ListComponent,
  },
  {
    path: 'create',
    component: CreateComponent,
    data: {
      screenName: ScreenName.CreateClass,
    },
  },
  {
    path: ':id',
    component: CreateComponent,
    data: {
      screenName: ScreenName.ViewClass,
    },
  },
  {
    path: 'edit/:id',
    component: CreateComponent,
    data: {
      screenName: ScreenName.UpdateClass,
    },
  },
];
