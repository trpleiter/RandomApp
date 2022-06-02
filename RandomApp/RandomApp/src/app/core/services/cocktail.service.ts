import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  constructor(private http: HttpClient) {}

  getRandomCocktail$(): Observable<any> {
    return this.http.get<any>(
      `https://thecocktaildb.com/api/json/v1/1/random.php`
    );
  }

  getCocktailByName$(name: string): Observable<any> {
    return this.http.get<any>(
      `https://thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
    );
  }
}
