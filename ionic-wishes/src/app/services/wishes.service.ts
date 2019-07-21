import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class WishesService {
  list: Array<List>;

  constructor() {
    this.list = [];
    const list1 = new List('Piedras del infinito');
    const list2 = new List('Héroes a morir');

    this.list.push(list1, list2);
  }
}
