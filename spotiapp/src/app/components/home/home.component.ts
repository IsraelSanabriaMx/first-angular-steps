import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  data: any[] = [];
  loading: boolean;
  error: boolean;
  errorMessage: string;

  constructor(private service: SpotifyService) {
    this.loading = true;
    this.error = false;

    this.service.getNewReleases().subscribe((results: any) => {
      this.data = results;
      this.loading = false;
    }, (e) => {
      this.errorMessage = e.error.error.message;
      this.error = true;
      this.loading = false;
    });
  }
}
