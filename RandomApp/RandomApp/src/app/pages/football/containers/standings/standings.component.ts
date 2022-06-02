import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, EMPTY, finalize, tap } from 'rxjs';
import { IFootballRootObject } from 'src/app/core/interfaces/football.interface';
import { FootballService } from 'src/app/core/services/football.service';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.scss'],
})
export class StandingsComponent implements OnInit {
  leagueSeasons: any;
  leagueId!: string;
  leagueStandings!: IFootballRootObject;
  leagueTable!: any;
  season: string = '2021';
  loaded = true;

  constructor(
    private route: ActivatedRoute,
    private footballService: FootballService
  ) {}

  ngOnInit(): void {
    this.loaded = false;
    this.leagueId = this.route.snapshot.params['id'];

    this.footballService
      .getFootballLeagueStandings$(this.leagueId, this.season)
      .pipe(
        tap((response) => {
          this.leagueStandings = response.data;
          this.leagueTable = response.data.standings;
        }),
        catchError((error) => {
          console.log(error);
          return EMPTY;
        }),
        finalize(() => {})
      )
      .subscribe();

    this.footballService
      .getFootballLeagueSeasons$(this.leagueId)
      .pipe(
        tap((response) => {
          this.leagueSeasons = response.data.seasons;
        }),
        catchError((error) => {
          console.log(error);
          return EMPTY;
        }),
        finalize(() => {})
      )
      .subscribe();
    this.loaded = true;
  }

  onSelectSeason(season: any) {
    this.season = season.target.value;

    console.log(this.leagueStandings);
    this.footballService
      .getFootballLeagueStandings$(this.leagueId, this.season)
      .pipe(
        tap((response) => {
          this.leagueStandings = response.data;
          this.leagueTable = response.data.standings;
        }),
        catchError((error) => {
          console.log(error);
          return EMPTY;
        }),
        finalize(() => {})
      )
      .subscribe();
  }
}
