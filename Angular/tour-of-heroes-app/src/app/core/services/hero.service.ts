import { Injectable } from '@angular/core';
import { Hero } from '@app/models';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroesUrl = 'api/heroes';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}
  /**
   * GET heroes from the server
   * @returns a single hero array
   */
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl);
  }
  /**
   * GET hero by id
   * @param id id of the hero
   * @returns a hero
   */
  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url);
  }
  /**
   * PUT update the hero on the server
   * @param hero the hero
   * @returns
   */
  updateHero(hero: Hero): Observable<Hero> {
    return this.http.put<Hero>(this.heroesUrl, hero, this.httpOptions);
  }
  /**
   * DELETE delete the hero from the server
   * @param id the id of the hero
   * @returns
   */
  deleteHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete<Hero>(url, this.httpOptions);
  }
  /**
   * POST add a new hero to the server
   * @param hero the hero
   * @returns
   */
  insertHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions);
  }
}
