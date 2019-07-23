import { Component, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { List } from '../../models/list.model';
import { WishesService } from '../../services/wishes.service';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() completed: boolean;
  @ViewChild(IonList) ionList: IonList;

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

  editList(list: List): void {
    this.service.openAlert(list);
    this.ionList.closeSlidingItems();
  }
}
