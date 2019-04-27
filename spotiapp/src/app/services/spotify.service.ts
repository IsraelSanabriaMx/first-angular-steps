import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  headers: HttpHeaders = new HttpHeaders({
    'Authorization': 'Bearer BQCz_naVyUH5IOAYj_S_V5aq97x41ScitJttoMKj8avHJEc2z8vh3T_U2qtTsO-D4Ze45a5oAUkaICfh7Xg-fB7LdefoBtax6Hq4dKiDngaCdWyyYTx_guot_7QDV9HyN7rJ80lTYay-bb_BHWbabfFbZ6JxLRe8HA',
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
