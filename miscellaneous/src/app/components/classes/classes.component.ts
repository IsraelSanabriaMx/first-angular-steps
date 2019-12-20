import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html'
})
export class ClassesComponent implements OnInit {
  alert = 'alert-danger';
  properties = {
    danger: true,
  };

  constructor() { }

  ngOnInit() {
  }
}
