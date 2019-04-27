import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  headers: HttpHeaders = new HttpHeaders({
    'Authorization': 'Bearer BQBmXeWSkTNEpkAmYoHicxUXXIrbqdOPGFj43NhskrYcDN4CT-tbIENlpthmksE1uPtPdEugrOeHFLavb362CDpcC-bX6FZ1HlFqK2JVByH2JCj-AHpFfVCDQPRKZn13WFDMjs4dQmUFV08MOEoquG1BowyADEIbSw',
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
