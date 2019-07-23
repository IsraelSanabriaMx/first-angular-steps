import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

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
    private router: Router,
    private alertController: AlertController
  ) {
    this.items = this.service.list;
  }

  async onAddListBtn() {
    const alert = await this.alertController.create({
      header: 'Nueva Lista',
      inputs: [
        {
          name: 'title',
          type: 'text',
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
          text: 'Crear',
          handler: (data) => {
            if (data.title.length === 0) {
              return;
            }

            const id = this.service.addList(data.title);

            this.router.navigate(['tabs', 'home', 'add', id]);

          },
        },
      ],
    });

    alert.present();
  }
}
