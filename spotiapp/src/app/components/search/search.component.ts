import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  data: any[] = [];
  constructor(private service: SpotifyService) { }

  search(term: string) {
    this.service.searchArtist(term).subscribe((results: any) => {
      this.data = results.artists.items;
      console.log(this.data);
    });
  }
}
