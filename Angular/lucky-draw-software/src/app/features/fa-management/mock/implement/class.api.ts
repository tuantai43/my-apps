import * as http from 'http';
import { DB, IApiClass, BaseAPI, IDB } from 'mock-lib';
import { v4 } from 'uuid';

export const ClassesApiKey = 'classes';
export enum ClassStatus {
  InProgress = 1,
  Enrolled = 2,
  Submitted = 3,
  Draft = 4,
  Cancelled = 5,
}
export enum ClassType {
  Fresher = 'FR',
  Campus = 'CP',
}
export interface BudgetDetails {
  id: string;
  item: string;
  unit: string;
  unitExpense: number;
  quantity: number;
  amount: number;
  tax: number;
  sum: number;
  note: string;
}
export interface ClassDetails {
  id: string;
  code: string;
  name: string;
  startDate: string;
  endDate: string;
  location: string;
  status: ClassStatus;
  plannedTraineeNo: number;
  acceptedTraineeNo: number;
  actualTraineeNo: number;
  expectedStartDate: Date;
  expectedEndDate: Date;
  detailedLocation: string;
  budgetCode: string;
  estimatedBudget: string;
  classAdmin: string[];
  learningPath: string;
  createdBy: string;
  createdAt: Date;
  updatedBy: string;
  updatedAt: Date;
  type: ClassType;
  skill: string;
  subjectType: string;
  subSubjectType: string;
  deliveryType: string;
  formatType: string;
  scope: string;
  supplier: string;
  actualStartDate?: Date;
  actualEndDate: Date;
  budgets: BudgetDetails[];
}

export class ClassAPI extends BaseAPI implements IApiClass {
  private DB: DB;
  constructor(DB: IDB) {
    super(DB as DB, ClassesApiKey);
    this.DB = DB as DB;
  }

  public override async get(req: http.IncomingMessage, res: http.ServerResponse, next: Function): Promise<void> {
    const data = (await super.data) as ClassDetails[];
    super.resultCustomJSON(
      req,
      res,
      next,
      data.map((item) => ({
        id: item.id,
        code: item.code,
        name: item.name,
        actualStartDate: item.actualStartDate,
        actualEndDate: item.actualEndDate,
        status: item.status,
        location: item.location,
      }))
    );
  }

  public override async post(req: http.IncomingMessage, res: http.ServerResponse, next: Function): Promise<void> {
    try {
      const data = await super.data;
      const body = await super.getBody(req);
      const jsonBody = JSON.parse(body) as ClassDetails;
      jsonBody.id = v4();
      jsonBody.createdAt = new Date();
      jsonBody.createdBy = 'TaiPT3';
      jsonBody.status = ClassStatus.Draft;
      data.push(jsonBody);
      await this.DB.create(ClassesApiKey, data);
      super.resultCustomJSON(req, res, next, {});
    } catch (e) {
      console.log(e);
      res.statusCode = 500;
      res.end();
    }
  }
}
