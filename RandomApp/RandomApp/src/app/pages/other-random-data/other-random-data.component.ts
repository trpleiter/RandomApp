import { Component, OnInit } from '@angular/core';
import { catchError, EMPTY, finalize, tap } from 'rxjs';
import { IRootObjectRestaurant } from 'src/app/core/interfaces/restaurant.interface';
import { RandomDataService } from 'src/app/core/services/other-random-data.service';

@Component({
  selector: 'app-other-random-data',
  templateUrl: './other-random-data.component.html',
  styleUrls: ['./other-random-data.component.scss'],
})
export class OtherRandomDataComponent implements OnInit {
  restaurantDetails!: IRootObjectRestaurant;
  constructor(private randomDataService: RandomDataService) {}

  ngOnInit(): void {
    this.randomDataService
      .getRestaurant$()
      .pipe(
        tap((response) => {
          console.log(response);
          this.restaurantDetails = response;
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
