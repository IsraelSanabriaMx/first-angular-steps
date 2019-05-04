import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  token = 'BQCgykejDsfH3mV62QUEf4G35cqqLtM6PR6_81-IdHpvrvSAiZlHiHNYIF5zpSLFGJatnczl3A8A-dREjStMtkMI8ukS8HanOD3sVOrJpIwLL56ywCx2-VP2k0_aJUe2TYBYZVqN_1scvY9HjjdF_7w0pDuq4ogjhg';

  headers: HttpHeaders = new HttpHeaders({
    Authorization: `Bearer ${this.token}`,
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
