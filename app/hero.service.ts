/**
 * Created by david492000 on 12/30/2016.
 */
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {Hero} from './hero';
import {Http} from '@angular/http';

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

  private handleError(error: any): Promise<any> {
    console.log('error ' , error);
    return Promise.reject(error.message);
  }
}


