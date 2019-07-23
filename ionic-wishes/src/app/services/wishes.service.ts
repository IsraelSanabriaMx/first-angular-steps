import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class WishesService {
  list: Array<List>;

  constructor(
    private router: Router,
    private alertController: AlertController
  ) {
    this.loadStorage();
  }

  private loadStorage(): void {
    const list = localStorage.getItem('list');

    if (JSON.parse(list)) {
      this.list = JSON.parse(list);

      return;
    }

    this.list = [];
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

  getList(id: string | number): List {
    const listId = Number(id);

    return this.list.find(data => data.id === listId);
  }

  deleteList(list: List): void {
    this.list = this.list.filter(listData => listData.id !== list.id);
    this.saveStorage();
  }

  async openAlert(list: List | null) {
    const title = list.title || '';
    const btnSuccess = title === '' ? 'Crear' : 'Actualizar';
    const alertHeader = title === '' ? 'Nueva Lista' : 'Actualizar Lista';

    const alert = await this.alertController.create({
      header: alertHeader,
      inputs: [
        {
          name: 'title',
          type: 'text',
          value: title,
          placeholder: 'Nombre de la lista',
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('cancel click');
          },
        },
        {
          text: btnSuccess,
          handler: (data) => {
            if (data.title.length === 0) {
              return;
            }

            // Edit
            if (title !== '') {
              list.title = data.title;
              this.saveStorage();

              return;
            }

            // New
            const id = this.addList(data.title);
            this.router.navigate(['tabs', 'home', 'add', id]);

          },
        },
      ],
    });

    alert.present();
  }
}
