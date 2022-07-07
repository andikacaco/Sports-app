import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  constructor(private http: HttpClient) {}

  getSports(): Observable<any> {
    return this.http.get(`${environment.APISports}`);
  }

  getLeagues(strSport: string) {
    return this.http.get(`${environment.APILeagues}?s=${strSport}`);
  }

  getTeams(strLeague: string) {
    return this.http.get(`${environment.baseUrl}?l=${strLeague}`);
  }

  getDesc(strLeague: string) {
    return this.http.get(`${environment.baseUrl}?l=${strLeague}`);
  }
}
