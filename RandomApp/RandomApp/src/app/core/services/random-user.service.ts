import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRandomUser } from '../interfaces/random-user.interface';

@Injectable({
  providedIn: 'root',
})
export class RandomUserService {
  constructor(private http: HttpClient) {}

  getRandomUser$(): Observable<IRandomUser> {
    return this.http.get<IRandomUser>(
      `https://random-data-api.com/api/users/random_user`
    );
  }
}
