import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  constructor(public heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => {
        this.heroService.heroes.next(heroes);
      });
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroService.heroes.next(this.heroService.heroes.value ? [...this.heroService.heroes.value, hero] : [hero]);
        this.getHeroes();
      });
  }

  delete(hero: Hero): void {
    this.heroService.deleteHero(hero).subscribe(
      () => {
        this.heroService.heroes.next(this.heroService.heroes.value.filter(h => h !== hero));
        this.getHeroes();
      }
    );
  }

}
