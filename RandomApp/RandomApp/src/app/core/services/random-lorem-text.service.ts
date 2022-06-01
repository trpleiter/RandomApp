import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RandomLoremTextService {
  constructor(private http: HttpClient) {}

  getLoremText$(): Observable<any> {
    return this.http.get<any>(
      `https://random-data-api.com/api/lorem_ipsum/random_lorem_ipsum`
    );
  }
}
