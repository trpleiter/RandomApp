import { Component, OnInit } from '@angular/core';
import { catchError, EMPTY, finalize, tap } from 'rxjs';
import { IRandomUser } from 'src/app/core/interfaces/random-user.interface';

import { RandomUserService } from 'src/app/core/services/random-user.service';

@Component({
  selector: 'app-random-users',
  templateUrl: './random-users.component.html',
  styleUrls: ['./random-users.component.scss'],
})
export class RandomUsersComponent implements OnInit {
  randomUser!: IRandomUser;
  constructor(private randomUserService: RandomUserService) {}

  ngOnInit(): void {
    this.randomUserService
      .getRandomUser$()
      .pipe(
        tap((response) => {
          console.log(response);
          this.randomUser = response;
        }),
        catchError((error) => {
          console.log(error);
          return EMPTY;
        }),
        finalize(() => {})
      )
      .subscribe();
  }

  onRefreshUser() {
    this.randomUserService
      .getRandomUser$()
      .pipe(
        tap((response) => {
          console.log(response);
          this.randomUser = response;
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
