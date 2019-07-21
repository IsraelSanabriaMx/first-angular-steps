import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { List } from '../../models/list.model';
import { WishesService } from '../../services/wishes.service';
import { ListItem } from '../../models/list-item.model';

@Component({
  selector: 'app-add',
  templateUrl: 'add.page.html',
  styleUrls: ['add.page.scss']
})
export class AddPage {
  list: List;
  description: string;

  constructor(
    private service: WishesService,
    private activatedRoute: ActivatedRoute
  ) {
    const listId = this.activatedRoute.snapshot.paramMap.get('id');
    this.list = this.service.getList(listId);
    this.description = '';
  }

  addItem(): void {
    if (this.description.length === 0) {
      return;
    }

    const item = new ListItem(this.description);
    this.list.items.push(item);
    this.description = '';

    this.service.saveStorage();
  }

  updateItem(): void {
    const pending = this.list.items.filter(itemData => !itemData.status).length;
    this.list.updatedAt = null;
    this.list.status = false;

    if (pending === 0) {
      this.list.updatedAt = new Date();
      this.list.status = true;
    }

    this.service.saveStorage();
  }

  deleteItem(index: number): void {
    this.list.items.splice(index, 1);
    this.service.saveStorage();
  }
}
