import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { List } from 'src/app/models/list.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() items: List;
  @Input() completed: false;

  constructor(private router: Router) {
    this.completed = false;
  }

  onClickList(list: List): void {
    const from = this.completed ? 'complete' : 'home';
    this.router.navigate(['tabs', from, 'add', list.id]);
  }
}
