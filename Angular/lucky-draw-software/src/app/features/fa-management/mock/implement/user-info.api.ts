import * as http from 'http';
import { DB, IApiClass, BaseAPI, IDB } from 'mock-lib';
import { AccountsApiKey } from './accounts.api';

export const UserApiKey = 'user/info';

export class UserInfoApi extends BaseAPI implements IApiClass {
  private DB: DB;
  constructor(DB: IDB) {
    super(DB as DB, UserApiKey);
    this.DB = DB as DB;
  }

  public override async get(req: http.IncomingMessage, res: http.ServerResponse, next: Function): Promise<void> {
    const fixture = await this.DB.search(AccountsApiKey);
    const data = await super.data;
    const userInfo = fixture.data.find((i: any) => i.id === data.id);
    super.resultCustomJSON(req, res, next, userInfo);
  }
}
