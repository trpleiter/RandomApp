import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocktailComponent } from './pages/cocktail/cocktail.component';
import { OtherRandomDataComponent } from './pages/other-random-data/other-random-data.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { RandomUsersComponent } from './pages/random-users/random-users.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: OverviewComponent,
  },

  {
    path: 'random-users',
    component: RandomUsersComponent,
  },
  {
    path: 'football',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/football/football.module').then(
            (mod) => mod.FootballModule
          ),
      },
    ],
  },
  {
    path: 'cocktails',
    component: CocktailComponent,
  },
  {
    path: 'other-random-data',
    component: OtherRandomDataComponent,
  },
  {
    path: 'country-information',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/country-info/country-info.module').then(
            (mod) => mod.CountryInfoModule
          ),
      },
    ],
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
