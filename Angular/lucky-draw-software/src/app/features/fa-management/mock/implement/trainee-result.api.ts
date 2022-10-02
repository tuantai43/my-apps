import * as http from 'http';
import { DB, IApiClass, BaseAPI, IDB } from 'mock-lib';

export const ApiKey = 'trainee/result/:emplId';

export class TraineeResultAPI extends BaseAPI implements IApiClass {
  constructor(DB: IDB) {
    super(DB as DB, ApiKey, 'trainee/result/[@.:0-9A-Za-z]+');
  }

  public override get(req: http.IncomingMessage, res: http.ServerResponse, next: Function): void {
    super.resultJSON(req, res, next);
  }
  
  public override async put(req: http.IncomingMessage, res: http.ServerResponse, next: Function) {
    try {
      console.log('dssdds')
      const body = await super.getBody(req);
      console.log(body);
      super.nomaryResult(req, res, next);
    } catch (err) {
      console.log(err);
      res.statusCode = 500;
      res.end(err);
    }
    
  }
  
  public override delete(req: http.IncomingMessage, res: http.ServerResponse, next: Function): void {
    super.resultJSON(req, res, next);
  }
}
