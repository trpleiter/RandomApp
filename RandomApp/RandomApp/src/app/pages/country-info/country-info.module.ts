import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CountryRoutingModule } from './country-info-routing.module';
import { CommonModule } from '@angular/common';
import { CountryInfoComponent } from './country-info.component';
import { CountryDetailsComponent } from './containers/country-details/country-details.component';

@NgModule({
  declarations: [CountryInfoComponent, CountryDetailsComponent],
  imports: [CountryRoutingModule, HttpClientModule, CommonModule],
  providers: [],
})
export class CountryInfoModule {}
