import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroe.service';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  heroes: Heroe[] = [];
  txt: string = '';
  constructor(private service: HeroesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.txt = params.txt;
      this.heroes = this.service.searchHeroe(this.txt);
    });
  }
}
