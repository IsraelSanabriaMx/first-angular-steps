import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  data: any[] = [];
  loading: boolean;

  constructor(private service: SpotifyService) {
    this.loading= true;

    this.service.getNewReleases().subscribe((results: any) => {
      this.data = results;
      this.loading = false;
    });
  }
}
