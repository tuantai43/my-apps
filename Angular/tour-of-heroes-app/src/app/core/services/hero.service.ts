import { Injectable } from '@angular/core';
import { Hero } from '@app/models';
import { HEROES } from '@app/mock-data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }
}
