import {Component, OnInit} from '@angular/core';
import { Hero } from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
import {Router} from "@angular/router";


@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css']
})
export class HeroesComponent implements OnInit{
  constructor(private router: Router, private heroService: HeroService){
  }

  ngOnInit(): void{
    this.getHeroes();
  }

  selectedHero: Hero;
  name = 'Angular';

  heroes: Hero[] = [];


  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }
  getHeroes(): void{
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  gotoDetail(): void {
   this.router.navigate(['/detail', this.selectedHero.id]);
  }
}


