import * as http from 'http';
import { DB, IApiClass, BaseAPI, IDB } from 'mock-lib';
import { ClassDetails, ClassesApiKey, ClassStatus } from './class.api';

export class CancelClasssAPI extends BaseAPI implements IApiClass {
  private DB: DB;
  constructor(DB: IDB) {
    super(DB as DB, 'classes/cancel');
    this.DB = DB as DB;
  }

  public override async put(req: http.IncomingMessage, res: http.ServerResponse, next: Function): Promise<void> {
    try {
      const body = await super.getBody(req);
      const bodyJson = JSON.parse(body) as { ids: string[] };
      const fixture = await this.DB.search(ClassesApiKey);
      const data = fixture.data as ClassDetails[];
      bodyJson.ids.forEach((id) => {
        const item = data.find((i) => i.id === id);
        if (item) {
          item.status = ClassStatus.Cancelled;
          item.updatedAt = new Date();
          item.updatedBy = 'HuyPL1';
        }
      });
      await this.DB.create(ClassesApiKey, data);
      super.resultCustomJSON(req, res, next, {});
    } catch (e) {
      console.log(e);
      res.statusCode = 500;
      res.end();
    }
  }
}
