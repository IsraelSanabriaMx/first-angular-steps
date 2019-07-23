import { Component } from '@angular/core';

import { WishesService } from '../../services/wishes.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  constructor(private service: WishesService) { }

  onAddListBtn() {
    this.service.openAlert(null);
  }
}
