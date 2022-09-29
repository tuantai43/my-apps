import * as http from 'http';
import { DB, IApiClass, BaseAPI, IDB } from 'mock-lib';

export const ApiKey = 'admins';

export class AdminsAPI extends BaseAPI implements IApiClass {
  constructor(DB: IDB) {
    super(DB as DB, ApiKey);
  }

  public override get(req: http.IncomingMessage, res: http.ServerResponse, next: Function): void {
    super.resultJSON(req, res, next);
  }
}
