/**
 * Created by david492000 on 12/30/2016.
 */
import {Injectable} from '@angular/core';

import {Hero} from './hero';
import {HEROES} from './mock-heroes';

@Injectable()
export class HeroService{
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
}


