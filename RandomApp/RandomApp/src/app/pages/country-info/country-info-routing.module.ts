import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { CountryDetailsComponent } from './containers/country-details/country-details.component';
import { CountryInfoComponent } from './country-info.component';

const routes: Routes = [
  {
    path: '',
    component: CountryInfoComponent,
  },
  {
    path: ':name',
    component: CountryDetailsComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountryRoutingModule {}
