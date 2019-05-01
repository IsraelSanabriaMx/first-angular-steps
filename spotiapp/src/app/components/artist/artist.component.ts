import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
})
export class ArtistComponent implements OnInit {
  data: any = {};
  loading: boolean;

  constructor(private activatedRoute: ActivatedRoute, private service: SpotifyService) {
    this.activatedRoute.params.subscribe(params => {
      this.loading = true;
      this.service.getArtistData(params.id).subscribe(response => {
        this.data = response;
        this.loading = false;
      });
    });
  }

  ngOnInit() { }
}
