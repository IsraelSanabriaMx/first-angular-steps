import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
})
export class CardsComponent implements OnInit {
  @Input() items: any[];
  @Input() hasMargin: boolean = false;
  @Input() loading: boolean = true;
  
  constructor(private router: Router) { }

  ngOnInit() { }

  getArtist(item: any) {
    const id = item.type === 'artist' ? item.id : item.artists[0].id;

    this.router.navigate(['/artist', id]);
  }
}
