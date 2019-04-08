import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from 'src/app/interfaces/heroes.interface';
import { HeroesService } from 'src/app/services/heroe.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {
  heroe: Heroe;
  constructor(private activatedRoute: ActivatedRoute, private service: HeroesService) {
    this.activatedRoute.params.subscribe(params => {
      this.heroe = this.service.getHeroeById(params.id);
    })
  }
}
