import * as http from 'http';
import { DB, IApiClass, BaseAPI, IDB } from 'mock-lib';
import { TraineeApiKey } from './trainees.api';
import { TraineeDetail } from '../../libs/utils/models';

export const TraineeDetailApiKey = 'trainees/:emplId';

export class TraineesDetailAPI extends BaseAPI implements IApiClass {
  private DB: DB;
  constructor(DB: IDB) {
    super(DB as DB, 'trainees/:emplId', 'trainees/[@.:0-9A-Za-z]+');
    this.DB = DB as DB;
  }

  public override async get(req: http.IncomingMessage, res: http.ServerResponse, next: Function): Promise<void> {
    try {
      console.log('ssssss')
      const fixture = await this.DB.search(TraineeApiKey);
      console.log(fixture);
      const data = fixture.data as TraineeDetail[];
      console.log('-----------------data----------------------');
      console.log(data);
      const empId = req.url?.replace(/(\/api\/trainees\/)([\w-]+$)/gm, '' + '$2');
      console.log('-----------------empId----------------------');
      console.log(empId);
      const traineeDetail = data.find((i) => i.emplId === empId);
      console.log(traineeDetail);
      if (traineeDetail) {
        super.resultCustomJSON(req, res, next, traineeDetail);
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
  
  // public override async put(req: http.IncomingMessage, res: http.ServerResponse, next: Function): Promise<void> {
  //   try {
  //     const body = await super.getBody(req);
  //     const bodyJson = JSON.parse(body) as TraineeDetail;
  //     const fixture = await this.DB.search(TraineeApiKey);
  //     const data = fixture.data as TraineeDetail[];
  //     const id = req.url?.replace(/(\/api\/trainees\/)([\w-]+$)/gm, '' + '$2') || '';
  //     const index = data.findIndex((i) => i.emplId === id);
  //     if (index) {
  //       data[index] = {
  //         ...data[index],
  //         ...bodyJson,
  //       };
  //       await this.DB.create(TraineeApiKey, data);
  //       super.resultCustomJSON(req, res, next, {});
  //     } else {
  //       res.statusCode = 400;
  //       super.resultCustomJSON(req, res, next, {
  //         msg: 'Class not found',
  //       });
  //     }
  //   } catch (e) {
  //     console.log(e);
  //     res.statusCode = 500;
  //     res.end();
  //   }
  // }
  
  // public override delete(req: http.IncomingMessage, res: http.ServerResponse, next: Function): void {
  //   super.resultJSON(req, res, next);
  // }
  public override async delete(req: http.IncomingMessage, res: http.ServerResponse, next: Function): Promise<void> {
    try {
      console.log('ssssss')
      const fixture = await this.DB.search(TraineeApiKey);
      console.log(fixture);
      const data = fixture.data as TraineeDetail[];
      console.log('-----------------data----------------------');
      console.log(data);
      const empId = req.url?.replace(/(\/api\/trainees\/)([\w-]+$)/gm, '' + '$2');
      console.log('-----------------empId----------------------');
      console.log(empId);
      const traineeDetail = data.find((i) => i.emplId === empId);
      console.log(traineeDetail);
      if (traineeDetail) {
        super.resultCustomJSON(req, res, next, traineeDetail);
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
