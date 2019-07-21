import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class WishesService {
  list: Array<List>;

  constructor() {
    this.loadStorage();
  }

  addList(title: string): number {
    const list = new List(title);
    this.list.push(list);
    this.saveStorage();

    return list.id;
  }

  saveStorage(): void {
    const list = JSON.stringify(this.list);
    localStorage.setItem('list', list);
  }

  private loadStorage(): void {
    const list = localStorage.getItem('list');

    if (JSON.parse(list)) {
      this.list = JSON.parse(list);

      return;
    }

    this.list = [];
  }

  getList(id: string | number): List {
    const listId = Number(id);

    return this.list.find(data => data.id === listId);
  }
}
