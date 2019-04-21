import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  headers: HttpHeaders = new HttpHeaders({
    'Authorization': 'Bearer BQCeFFISKxQcIYGPhqMD9zy5NMLKI_rnYYk7ZPE1CA4srQboOZW1SL7lWju1t5FLtr5d87iFVyUVOJS9B84NJBy37WYc43tk5CQSwAgUzWyUb6g2FkSOTHVwVyPK7GE6H6ISR0mSbVxdRwFVJVDiXrwponQMYo-MRg',
  });

  constructor(private http: HttpClient) { }

  buildGetAttempt(url: string) {
    return this.http.get(url, { headers: this.headers });
  }

  getNewReleases() {
    return this.buildGetAttempt('https://api.spotify.com/v1/browse/new-releases');
  }

  searchArtist(term: string) {
    return this.buildGetAttempt(`https://api.spotify.com/v1/search?q=${term}&type=artist&limit=15`);
  }
}
