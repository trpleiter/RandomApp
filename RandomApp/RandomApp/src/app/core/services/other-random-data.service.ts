import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RandomDataService {
  constructor(private http: HttpClient) {}

  getRestaurant$(): Observable<any> {
    return this.http.get<any>(
      `https://random-data-api.com/api/restaurant/random_restaurant`
    );
  }
}
