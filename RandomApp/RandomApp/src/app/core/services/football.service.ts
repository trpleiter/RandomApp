import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FootballService {
  constructor(private http: HttpClient) {}

  getFootballLeagues$(): Observable<any> {
    return this.http.get<any>(
      `https://api-football-standings.azharimm.site/leagues`
    );
  }

  getFootballLeagueSeasons$(id: string): Observable<any> {
    return this.http.get<any>(
      `https://api-football-standings.azharimm.site/leagues/${id}/seasons`
    );
  }

  getFootballLeagueStandings$(id: string, season: string): Observable<any> {
    return this.http.get<any>(
      `https://api-football-standings.azharimm.site/leagues/${id}/standings?season=${season}&sort=asc`
    );
  }
}
