import * as http from 'http';
import { DB, IApiClass, BaseAPI, IDB } from 'mock-lib';
import { TraineeDetail } from '../../libs/utils/models';

export const TraineeApiKey = 'trainees';

export class TraineesAPI extends BaseAPI implements IApiClass {
  // private DB: DB;
  constructor(DB: IDB) {
    super(DB as DB, TraineeApiKey);
    // this.DB = DB as DB;
  }

  public override async get(req: http.IncomingMessage, res: http.ServerResponse, next: Function): Promise<void> {
    const data = (await super.data) as TraineeDetail[];
    super.resultCustomJSON(
      req,
      res,
      next,
      data.map((item) => ({
        emplId: item.emplId,
        account: item.account,
        name: item.name,
        dob: item.dob,
        gender: item.gender,
        university: item.university,
        faculty: item.faculty,
        phone: item.phone,
        email: item.email,
        status: item.status,
      }))
    );
  }

  // public override async post(req: http.IncomingMessage, res: http.ServerResponse, next: Function): Promise<void> {
  //   try {
  //     const body = await super.getBody(req);
  //     console.log('body', body);
  //     const fixture = await this.DB.search(TraineeApiKey);
  //     const data = fixture.data as TraineeDetail[];
  //     console.log('data', data);
  //     if (body) {
  //       super.resultCustomJSON(req, res, next, {});
  //     } else {
  //       res.statusCode = 400;
  //       super.resultCustomJSON(req, res, next, {
  //         msg: 'Trainee not found',
  //       });
  //     }
  //   } catch (e) {
  //     console.log(e);
  //     res.statusCode = 500;
  //     res.end();
  //   }
  // }
}
