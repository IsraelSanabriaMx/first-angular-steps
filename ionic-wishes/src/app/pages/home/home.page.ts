import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { WishesService } from '../../services/wishes.service';
import { List } from '../../models/list.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  items: Array<List>;

  constructor(
    private service: WishesService,
    private router: Router
  ) {
    this.items = this.service.list;
  }

  onAddListBtn(): void {
    this.router.navigate(['tabs', 'add']);
  }
}
