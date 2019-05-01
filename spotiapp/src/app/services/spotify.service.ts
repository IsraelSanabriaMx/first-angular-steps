import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  headers: HttpHeaders = new HttpHeaders({
    'Authorization': 'Bearer BQCf5iB42wfis4ktV2sMVRNBnpQsgWZPdLnbXVLC9jNcvMRxQWViClbCUHoNWw2Ejaz7tPrPvcJGXiJ-OHnttsC8uM79mSfuTm6cEFn_zCUn0ZGb7rJrJ7xuaRkUBS5PC9HrW8qLMbwuoU5yacimOROS-zP-FP4_Hw',
  });

  constructor(private http: HttpClient) { }

  buildGetAttempt(url: string) {
    return this.http.get(`https://api.spotify.com/v1/${url}`, { headers: this.headers });
  }

  getNewReleases() {
    return this.buildGetAttempt('browse/new-releases').pipe(map((response: any) => response.albums.items));
  }

  searchArtist(term: string) {
    return this.buildGetAttempt(`search?q=${term}&type=artist&limit=15`).pipe(map((response: any) => response.artists.items));
  }

  getArtistData(id: string) {
    return this.buildGetAttempt(`artists/${id}`);
  }

  getTopTracks(id: string) {
    return this.buildGetAttempt(`artists/${id}/top-tracks?country=ES`).pipe(map((response: any) => response.tracks));
  }
}
