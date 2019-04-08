import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Heroe } from 'src/app/interfaces/heroes.interface';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
})
export class HeroeCardComponent implements OnInit {
  @Input() heroe: Heroe;
  @Input() id: number;

  @Output() selected: EventEmitter<number>;

  constructor() {
    this.selected = new EventEmitter();
  }

  ngOnInit() { }

  showHero() {
    this.selected.emit(this.id);
  }
}
