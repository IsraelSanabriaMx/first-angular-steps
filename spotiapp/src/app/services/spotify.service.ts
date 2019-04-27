import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  headers: HttpHeaders = new HttpHeaders({
    'Authorization': 'Bearer BQCaGqUePQcOisD9XEZo4CGvtZht4AamQ1FiOYyD5Zo2QJCVXWNErSx_xF4YO3du3AG75z2shvYiD7mM1aAxbrKHVK7KqzJiFnWpWiaX3HPPIVa7G3suTETzfjyCD1HbhMgp8CJBOHj2kbeQnZxP3FVxU9QcgqETPw',
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
}
