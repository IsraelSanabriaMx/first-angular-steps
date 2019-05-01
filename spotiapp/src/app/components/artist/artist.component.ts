import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
})
export class ArtistComponent {
  data: any = {};
  loading: boolean;
  topTracks: any[] = [];

  constructor(private activatedRoute: ActivatedRoute, private service: SpotifyService) {
    this.activatedRoute.params.subscribe(params => {
      this.loading = true;

      this.getArtistData(params.id);
      this.getTopTracks(params.id);
    });
  }

  getArtistData(id) {
    this.service.getArtistData(id).subscribe(response => {
      this.data = response;
      this.loading = false;
    });
  }

  getTopTracks(id) {
    this.service.getTopTracks(id).subscribe(response => {
      this.topTracks = response;
      console.log(response);
    });
  }
}
