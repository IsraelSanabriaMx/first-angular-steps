import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  name = 'Israel';
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI = Math.PI;
  decimal = 0.234;
  money = 1234.5;
  heroe = {
    name: 'Logan',
    nickName: 'Wolverine',
    age: 500,
    address: {
      street: 'Calle',
      number: 4,
      state: 'México',
    },
  };
  response = new Promise((resolve) => {
    setTimeout(() => resolve('Resolve promise'), 3500);
  });
  date = new Date();
  name2 = 'isRael siMMer doWn';
  videoUrl = 'FQI5_TH9YLc';
  active: boolean = true
}
