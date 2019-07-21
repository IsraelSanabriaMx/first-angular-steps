import { Component } from '@angular/core';

import { List } from '../../models/list.model';
import { WishesService } from '../../services/wishes.service';

@Component({
  selector: 'app-complete',
  templateUrl: 'complete.page.html',
  styleUrls: ['complete.page.scss']
})
export class CompletePage {
  items: Array<List>;

  constructor(private service: WishesService) {
    this.items = this.service.list;
  }
}
