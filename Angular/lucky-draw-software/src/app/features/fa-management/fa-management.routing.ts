import { Routes } from '@angular/router';
import { LayoutComponent } from '@app/features/fa-management/modules/layout';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'class-management',
        loadChildren: () => import('./modules/class/class.module').then((m) => m.ClassModule),
      },
      {
        path: 'candidate-management',
        loadChildren: () => import('./modules/candidate/candidate.module').then((m) => m.CandidateModule),
      },
      {
        path: 'trainee-management',
        loadChildren: () => import('./modules/trainee/trainee.module').then((m) => m.TraineeModule),
      },
      {
        path: 'trainer-management',
        loadChildren: () => import('./modules/trainer/trainer.module').then((m) => m.TrainerModule),
      },
      {
        path: 'report-management',
        loadChildren: () => import('./modules/report/report.module').then((m) => m.ReportModule),
      },
    ],
  },
];
