import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from '../../services/heroe.service';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];
  constructor(private service: HeroesService, private router: Router) { }

  ngOnInit() {
    this.heroes = this.service.getHeroes();
  }

  showHero(idx: number) {
    this.router.navigate(['/heroe', idx])
  }
}
