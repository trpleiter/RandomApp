import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  EMPTY,
  filter,
  finalize,
  fromEvent,
  tap,
} from 'rxjs';
import { CountryInformationService } from 'src/app/core/services/country-information.service';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.scss'],
})
export class CountryInfoComponent implements OnInit {
  @ViewChild('inputCountryName') inputCountryName!: ElementRef;
  @ViewChild('inputCountryCurrency') inputCountryCurrency!: ElementRef;
  @ViewChild('inputCountryCapital') inputCountryCapital!: ElementRef;
  @ViewChild('inputCountryRegion') inputCountryRegion!: ElementRef;
  countryInformation!: any;
  toggleError = false;

  constructor(private countryInformationService: CountryInformationService) {}

  ngOnInit(): void {
    this.countryInformationService
      .getAllCountryInformation$()
      .pipe(
        tap((response) => {
          this.countryInformation = response;
        }),
        catchError((error) => {
          console.log(error);
          this.toggleError = true;
          return EMPTY;
        }),
        finalize(() => {})
      )
      .subscribe();
  }

  ngAfterViewInit() {
    fromEvent(this.inputCountryName.nativeElement, 'keyup')
      .pipe(
        filter(Boolean),
        debounceTime(250),
        distinctUntilChanged(),
        tap(() => {
          this.countryInformationService
            .getCountryInformationByName$(
              this.inputCountryName.nativeElement.value
            )
            .pipe(
              tap((response) => {
                this.toggleError = false;
                this.countryInformation = response;
              }),
              catchError((error) => {
                console.log(error.message);
                this.toggleError = true;
                return EMPTY;
              }),
              finalize(() => {})
            )
            .subscribe();
        })
      )
      .subscribe();

    fromEvent(this.inputCountryCurrency.nativeElement, 'keyup')
      .pipe(
        filter(Boolean),
        debounceTime(500),
        distinctUntilChanged(),
        tap(() => {
          this.countryInformationService
            .getCountryInformationByCurrency$(
              this.inputCountryCurrency.nativeElement.value
            )
            .pipe(
              tap((response) => {
                this.toggleError = false;
                this.countryInformation = response;
              }),
              catchError((error) => {
                console.log(error);
                this.toggleError = true;
                return EMPTY;
              }),
              finalize(() => {})
            )
            .subscribe();
        })
      )
      .subscribe();

    fromEvent(this.inputCountryCapital.nativeElement, 'keyup')
      .pipe(
        filter(Boolean),
        debounceTime(500),
        distinctUntilChanged(),
        tap(() => {
          this.countryInformationService
            .getCountryInformationByCapital$(
              this.inputCountryCapital.nativeElement.value
            )
            .pipe(
              tap((response) => {
                this.toggleError = false;
                this.countryInformation = response;
              }),
              catchError((error) => {
                console.log(error);
                this.toggleError = true;
                return EMPTY;
              }),
              finalize(() => {})
            )
            .subscribe();
        })
      )
      .subscribe();

    fromEvent(this.inputCountryRegion.nativeElement, 'keyup')
      .pipe(
        filter(Boolean),
        debounceTime(500),
        distinctUntilChanged(),
        tap(() => {
          this.countryInformationService
            .getCountryInformationByRegion$(
              this.inputCountryRegion.nativeElement.value
            )
            .pipe(
              tap((response) => {
                this.toggleError = false;
                this.countryInformation = response;
              }),
              catchError((error) => {
                console.log(error);
                this.toggleError = true;
                return EMPTY;
              }),
              finalize(() => {})
            )
            .subscribe();
        })
      )
      .subscribe();
  }
}
