import { Component, OnInit } from '@angular/core';
import { catchError, EMPTY, finalize, tap } from 'rxjs';
import { CountryInformationService } from 'src/app/core/services/country-information.service';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.scss'],
})
export class CountryInfoComponent implements OnInit {
  countryInformation!: any;
  constructor(private countryInformationService: CountryInformationService) {}

  ngOnInit(): void {
    this.countryInformationService
      .getAllCountryInformation$()
      .pipe(
        tap((response) => {
          console.log(response[0]);
          this.countryInformation = response;
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
