import {BaseService} from './base.service';
import {Injectable} from '@angular/core';
import {Hero} from '@app/models';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HeroService extends BaseService<Hero> {
  constructor(http: HttpClient) {
    super(http, 'hero', Hero);
  }
}
