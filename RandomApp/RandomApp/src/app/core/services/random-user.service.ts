import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RandomUserService {
  constructor(private http: HttpClient) {}

  getRandomUser$(): Observable<any> {
    return this.http.get<any>(
      `https://random-data-api.com/api/users/random_user`
    );
  }
}
