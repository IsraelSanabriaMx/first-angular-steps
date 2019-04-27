import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  data: any[] = [];
  loading: boolean;

  constructor(private service: SpotifyService) { }

  search(term: string) {
    if (!term) {
      this.data = [];
      return;
    }

    this.loading = true;
    this.service.searchArtist(term).subscribe((results: any) => {
      this.data = results;
      this.loading = false;
    });
  }
}
