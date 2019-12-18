import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [ngStyle]="{ 'font-size': '20px' }">
      Hola mundo
    </p>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
