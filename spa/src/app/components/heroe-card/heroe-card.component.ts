import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe } from 'src/app/interfaces/heroes.interface';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
})
export class HeroeCardComponent implements OnInit {
  @Input() heroe: Heroe;
  @Input() id: number;

  constructor(private router: Router) { }

  ngOnInit() { }

  showHero() {
    this.router.navigate(['/heroe', this.id]);
  }
}
