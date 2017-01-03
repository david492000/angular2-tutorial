/**
 * Created by david492000 on 12/30/2016.
 */
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {Hero} from './hero';
import {Http, Response} from '@angular/http';
import {Observable} from "rxjs";

@Injectable()
export class HeroService {
  private heroesUrl = 'api/heroes';

  constructor(private http: Http) { }

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl).toPromise().then(response => response.json().data as Hero[]).catch(this.handleError);
  }
  getHero(id: number): Promise<Hero> {
    return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
  }

  search(term: String): Observable<Hero[]> {
    return this.http
      .get(`app/heroes/?name=${term}`)
      .map((r: Response) => r.json().data as Hero[]);
  }

  private handleError(error: any): Promise<any> {
    console.log('error ' , error);
    return Promise.reject(error.message);
  }
}


