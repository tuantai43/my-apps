import * as browserSync from 'browser-sync';
import { resolve } from 'path';

import { DB, UtilRouter, baseContentsPath } from 'mock-lib';

import { AdminsAPI } from './implement/admins.api';
import { BudgetsAPI } from './implement/budgets.api';
import { ClassAPI } from './implement/class.api';
import { ClassDetailsAPI } from './implement/class.detail.api';
import { DeliveryTypesAPI } from './implement/delivery-types.api';
import { EventCategoriesAPI } from './implement/event-categories.api';
import { FormatTypesAPI } from './implement/format-types.api';
import { LocationsAPI } from './implement/locations.api';
import { ScopesAPI } from './implement/scopes.api';
import { SubSubjectTypesAPI } from './implement/sub-subject-types.api';
import { SubjectTypesAPI } from './implement/subject-types.api';
import { TrainersAPI } from './implement/trainers.api';
import { TraineesAPI } from './implement/trainees.api';
import { TraineesDetailAPI } from './implement/trainee-detail.api';
import { TraineeResultAPI } from './implement/trainee-result.api';
import { UserInfoApi } from './implement/user-info.api';
import { CancelClasssAPI } from './implement/class.cancel.api';
import { TraineesDeleteAPI } from './implement/trainee-delete.api';

const util = new UtilRouter(new DB(resolve(__dirname, '_fixture'), 'api'), 'api');

// registry mock api
const MOCK_API: Array<browserSync.PerRouteMiddleware | browserSync.MiddlewareHandler> = [
  ...util.createAppApi(AdminsAPI),
  ...util.createAppApi(BudgetsAPI),
  ...util.createAppApi(CancelClasssAPI),
  ...util.createAppApi(ClassDetailsAPI),
  ...util.createAppApi(ClassAPI),
  ...util.createAppApi(DeliveryTypesAPI),
  ...util.createAppApi(EventCategoriesAPI),
  ...util.createAppApi(FormatTypesAPI),
  ...util.createAppApi(LocationsAPI),
  ...util.createAppApi(ScopesAPI),
  ...util.createAppApi(SubSubjectTypesAPI),
  ...util.createAppApi(SubjectTypesAPI),
  ...util.createAppApi(TrainersAPI),
  ...util.createAppApi(TraineesDeleteAPI),
  ...util.createAppApi(TraineesDetailAPI),
  ...util.createAppApi(TraineesAPI),
  ...util.createAppApi(TraineeResultAPI),
  ...util.createAppApi(UserInfoApi),
];

// Start the server
browserSync({
  middleware: [util.addHeaderParameter(), ...MOCK_API, util.apis([...util.apiList])],
  port: 3030,
  startPath: 'index.html',
  open: false,
  server: {
    baseDir: baseContentsPath(),
    routes: {
      ['/node_modules']: 'node_modules',
    },
  },
});
