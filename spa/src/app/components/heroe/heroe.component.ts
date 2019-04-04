import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(param => {
      console.log(param);
    })
  }
}
