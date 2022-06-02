import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, EMPTY, finalize, tap } from 'rxjs';
import { CountryInformationService } from 'src/app/core/services/country-information.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss'],
})
export class CountryDetailsComponent implements OnInit {
  country: string = '';
  countryDetails: any;
  countryLanguages: any;

  constructor(
    private route: ActivatedRoute,
    private countryInformationService: CountryInformationService
  ) {}

  ngOnInit(): void {
    this.country = this.route.snapshot.params['name'];
    console.log(this.country);
    this.countryInformationService
      .getCountryInformationByName$(this.country)
      .pipe(
        tap((response) => {
          console.log(response);
          this.countryDetails = response;
          this.countryLanguages = Object.values(
            this.countryDetails[0].languages
          );
        }),
        catchError((error) => {
          console.log(error.message);
          return EMPTY;
        }),
        finalize(() => {})
      )
      .subscribe();

    console.log(Object.values(this.countryDetails[0].languages));
  }
}
