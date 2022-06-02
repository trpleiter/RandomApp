import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryInformationService {
  constructor(private http: HttpClient) {}

  getAllCountryInformation$(): Observable<any> {
    return this.http.get<any>(`https://restcountries.com/v3.1/all`);
  }

  getCountryInformationByName$(name: string): Observable<any> {
    return this.http.get<any>(`https://restcountries.com/v3.1/name/${name}`);
  }

  getCountryInformationByCurrency$(currency: string): Observable<any> {
    return this.http.get<any>(
      `https://restcountries.com/v3.1/currency/${currency}`
    );
  }

  getCountryInformationByCapital$(capital: string): Observable<any> {
    return this.http.get<any>(
      `https://restcountries.com/v3.1/capital/${capital}`
    );
  }
  getCountryInformationByRegion$(region: string): Observable<any> {
    return this.http.get<any>(
      `https://restcountries.com/v3.1/region/${region}`
    );
  }
}
