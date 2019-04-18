import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor(private http: HttpClient) { }

  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAOzxXXJAxehY4DLTcFd86CSbw93R0kCQmhrKU_seMtUiLJqX-f1B32E1m_-H5mzQ3mo4nWBXl6yKjDWyM',
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }
}
