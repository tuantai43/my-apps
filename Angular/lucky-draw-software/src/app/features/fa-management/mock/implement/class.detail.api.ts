import * as http from 'http';
import { DB, IApiClass, BaseAPI, IDB } from 'mock-lib';
import { ClassDetails, ClassesApiKey } from './class.api';

export class ClassDetailsAPI extends BaseAPI implements IApiClass {
  private DB: DB;
  constructor(DB: IDB) {
    super(DB as DB, 'classes/:id', 'classes/[0-9a-zA-Z-]+');
    this.DB = DB as DB;
  }

  public override async get(req: http.IncomingMessage, res: http.ServerResponse, next: Function): Promise<void> {
    try {
      const fixture = await this.DB.search(ClassesApiKey);
      const data = fixture.data as ClassDetails[];
      const id = req.url?.replace(/(\/api\/classes\/)([\w-]+$)/gm, '' + '$2');
      const classDetails = data.find((i) => i.id === id);
      if (classDetails) {
        super.resultCustomJSON(req, res, next, classDetails);
      } else {
        res.statusCode = 400;
        super.resultCustomJSON(req, res, next, {
          msg: 'Class not found',
        });
      }
    } catch (e) {
      console.log(e);
      res.statusCode = 500;
      res.end();
    }
  }

  public override async put(req: http.IncomingMessage, res: http.ServerResponse, next: Function): Promise<void> {
    try {
      const body = await super.getBody(req);
      const bodyJson = JSON.parse(body) as ClassDetails;
      const fixture = await this.DB.search(ClassesApiKey);
      const data = fixture.data as ClassDetails[];
      const id = req.url?.replace(/(\/api\/classes\/)([\w-]+$)/gm, '' + '$2') || '';
      const index = data.findIndex((i) => i.id === id);
      if (index) {
        bodyJson.updatedAt = new Date();
        bodyJson.updatedBy = 'HauNX';
        data[index] = {
          ...data[index],
          ...bodyJson,
        };
        await this.DB.create(ClassesApiKey, data);
        super.resultCustomJSON(req, res, next, {});
      } else {
        res.statusCode = 400;
        super.resultCustomJSON(req, res, next, {
          msg: 'Class not found',
        });
      }
    } catch (e) {
      console.log(e);
      res.statusCode = 500;
      res.end();
    }
  }
}
