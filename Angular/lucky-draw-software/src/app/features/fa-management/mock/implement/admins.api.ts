import * as http from 'http';
import { DB, IApiClass, BaseAPI, IDB } from 'mock-lib';
import { AccountsApiKey } from './accounts.api';

export const ApiKey = 'admins';

export class AdminsAPI extends BaseAPI implements IApiClass {
  private DB: DB;
  constructor(DB: IDB) {
    super(DB as DB, ApiKey);
    this.DB = DB as DB;
  }

  public override async get(req: http.IncomingMessage, res: http.ServerResponse, next: Function): Promise<void> {
    const fixture = await this.DB.search(AccountsApiKey);
    super.resultCustomJSON(
      req,
      res,
      next,
      fixture.data.filter((i: any) => i.roles.includes('CA'))
    );
  }
}
