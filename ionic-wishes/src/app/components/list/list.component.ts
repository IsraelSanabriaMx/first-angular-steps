import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { List } from '../../models/list.model';
import { WishesService } from '../../services/wishes.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() completed: boolean;

  constructor(private router: Router, private service: WishesService) {
    this.completed = false;
  }

  onClickList(list: List): void {
    const from = this.completed ? 'complete' : 'home';
    this.router.navigate(['tabs', from, 'add', list.id]);
  }

  deleteList(list: List): void {
    this.service.deleteList(list);
  }
}
