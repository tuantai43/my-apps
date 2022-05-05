import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '@app/models/user.model';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseService<UserModel> {
  constructor(http: HttpClient) {
    super(http, 'user', UserModel);
  }
}
