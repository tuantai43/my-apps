import { BaseModel } from './base.model';

export class UserModel extends BaseModel {
  firstName!: string;
  lastName!: string;
  email: string = '';
  password?: string;
}
