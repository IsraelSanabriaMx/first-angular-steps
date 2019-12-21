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
  loading = false;
  fnTxt = 'Save';

  constructor() { }

  ngOnInit() {
  }

  save() {
    this.loading = true;
    this.fnTxt = 'Saving...';

    setTimeout(() => {
      this.loading = false;
      this.fnTxt = 'Save';
    }, 3000);
  }
}
