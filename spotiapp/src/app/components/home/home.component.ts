import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  data: any[] = [];
  constructor(private service: SpotifyService) {
    this.service.getNewReleases().subscribe((results: any) => {
      this.data = results;
      console.log(this.data);
    });
  }
}
