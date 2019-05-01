import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  headers: HttpHeaders = new HttpHeaders({
    'Authorization': 'Bearer BQDPs4YDOqZFXY26g4B0E9LNybRVjv1lqKL8H7rNZhrClHhiz32LyXn-E5K4ybLzUQbrvfWL0Ux3Q0lKWKOtwlV06ifjwVZwM0HtkyHhYS_H51XhrQIiCy1dyAa7jaG8QXJmBSZmsXWJCgX6GIH5Vh1jc6Ogd5kIlg',
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
}
