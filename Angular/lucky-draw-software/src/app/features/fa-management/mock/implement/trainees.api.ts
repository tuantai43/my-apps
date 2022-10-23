import * as http from 'http';
import { DB, IApiClass, BaseAPI, IDB } from 'mock-lib';
import { TraineeDetail } from '../../libs/utils/models';

export const TraineeApiKey = 'trainees';

export class TraineesAPI extends BaseAPI implements IApiClass {
  constructor(DB: IDB) {
    super(DB as DB, TraineeApiKey);
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
}
