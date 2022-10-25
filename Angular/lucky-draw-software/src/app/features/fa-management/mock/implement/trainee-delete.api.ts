import * as http from 'http';
import { DB, IApiClass, BaseAPI, IDB } from 'mock-lib';
import { TraineeApiKey } from './trainees.api';
import { TraineeDetail } from '../../libs/utils/models';

export const TraineeDeleteApiKey = 'trainees/delete';

export class TraineesDeleteAPI extends BaseAPI implements IApiClass {
  private DB: DB;
  constructor(DB: IDB) {
    super(DB as DB, TraineeDeleteApiKey);
    this.DB = DB as DB;
  }

  public override async post(req: http.IncomingMessage, res: http.ServerResponse, next: Function): Promise<void> {
    try {
      const body = await super.getBody(req);
      const fixture = await this.DB.search(TraineeApiKey);
      const data = fixture.data as TraineeDetail[];
      const newDataAfterDeleted = data.filter((i) => !body.includes(i.emplId));
      if (body) {
        await this.DB.create(TraineeApiKey, newDataAfterDeleted)
        super.resultCustomJSON(req, res, next, newDataAfterDeleted);
      } else {
        res.statusCode = 400;
        super.resultCustomJSON(req, res, next, {
          msg: 'Trainee not found',
        });
      }
    } catch (e) {
      console.log(e);
      res.statusCode = 500;
      res.end();
    }
  }
}
