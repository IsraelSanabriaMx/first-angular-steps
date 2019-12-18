import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="size">
      Hola mundo
    </p>
    <button class="btn btn-primary" (click)="size = size + 5">
      <i class="fas fa-plus-circle"></i>
    </button>
    <button class="btn btn-danger" (click)="size = size - 5">
      <i class="fas fa-minus-circle"></i>
    </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {
  size = 20;

  constructor() { }

  ngOnInit() {
  }
}
