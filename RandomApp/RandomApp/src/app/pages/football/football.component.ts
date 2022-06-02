import { Component, OnInit } from '@angular/core';
import { catchError, EMPTY, finalize, tap } from 'rxjs';
import { FootballService } from 'src/app/core/services/football.service';

@Component({
  selector: 'app-football',
  templateUrl: './football.component.html',
  styleUrls: ['./football.component.scss'],
})
export class FootballComponent implements OnInit {
  footballLeagues: any;
  constructor(private footballService: FootballService) {}

  ngOnInit(): void {
    this.footballService
      .getFootballLeagues$()
      .pipe(
        tap((response) => {
          this.footballLeagues = response.data;
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
