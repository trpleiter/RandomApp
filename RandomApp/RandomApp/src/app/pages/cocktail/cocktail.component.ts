import { Component, OnInit } from '@angular/core';
import { catchError, EMPTY, finalize, tap } from 'rxjs';
import { Drink, RootObject } from 'src/app/core/interfaces/cocktail.interface';
import { CocktailService } from 'src/app/core/services/cocktail.service';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.scss'],
})
export class CocktailComponent implements OnInit {
  randomCocktail!: RootObject;
  constructor(private cocktailService: CocktailService) {}

  ngOnInit(): void {
    this.cocktailService
      .getRandomCocktail$()
      .pipe(
        tap((response) => {
          console.log(response.drinks);
          this.randomCocktail = response;
          console.log(this.randomCocktail.drinks[0].strDrink);
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
