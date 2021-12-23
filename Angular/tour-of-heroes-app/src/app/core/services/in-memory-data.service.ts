import { Injectable } from '@angular/core';
import { HEROES, POWERS } from '@app/mock-data';
import { Hero } from '@app/models';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = HEROES;
    const powers = POWERS;
    return { heroes, powers };
  }
  // genId(heroes: Hero[]): number {
  //   if (heroes.length > 0) {
  //     return Math.max(...heroes.map((hero) => hero.id)) + 1;
  //   }
  //   return 11;
  // }
}
