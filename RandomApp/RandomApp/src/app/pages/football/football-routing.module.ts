import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

import { FootballComponent } from './football.component';
import { StandingsComponent } from './containers/standings/standings.component';

const routes: Routes = [
  {
    path: '',
    component: FootballComponent,
  },
  {
    path: ':id',
    component: StandingsComponent,
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
export class FootballRoutingModule {}
