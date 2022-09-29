import * as browserSync from 'browser-sync';
import { resolve } from 'path';

import { DB, UtilRouter, baseContentsPath } from 'mock-lib';

import { AdminsAPI } from './implement/admins.api';
import { BudgetsAPI } from './implement/budgets.api';
import { DeliveryTypesAPI } from './implement/delivery-types.api';
import { EventCategoriesAPI } from './implement/event-categories.api';
import { FormatTypesAPI } from './implement/format-types.api';
import { LocationsAPI } from './implement/locations.api';
import { ScopesAPI } from './implement/scopes.api';
import { SubSubjectTypesAPI } from './implement/sub-subject-types.api';
import { SubjectTypesAPI } from './implement/subject-types.api';
import { TrainersAPI } from './implement/trainers.api';

const util = new UtilRouter(new DB(resolve(__dirname, '_fixture'), 'api'), 'api');

// registry mock api
const MOCK_API: Array<browserSync.PerRouteMiddleware | browserSync.MiddlewareHandler> = [
  ...util.createAppApi(AdminsAPI),
  ...util.createAppApi(BudgetsAPI),
  ...util.createAppApi(DeliveryTypesAPI),
  ...util.createAppApi(EventCategoriesAPI),
  ...util.createAppApi(FormatTypesAPI),
  ...util.createAppApi(LocationsAPI),
  ...util.createAppApi(ScopesAPI),
  ...util.createAppApi(SubSubjectTypesAPI),
  ...util.createAppApi(SubjectTypesAPI),
  ...util.createAppApi(TrainersAPI),
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
