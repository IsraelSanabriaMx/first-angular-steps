import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroe.service';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];
  constructor(private service: HeroesService) { }

  ngOnInit() {
    this.heroes = this.service.getHeroes();
  }
}
