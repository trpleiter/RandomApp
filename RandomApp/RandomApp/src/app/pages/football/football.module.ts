import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FootballComponent } from './football.component';
import { CommonModule } from '@angular/common';
import { FootballRoutingModule } from './football-routing.module';
import { StandingsComponent } from './containers/standings/standings.component';

@NgModule({
  declarations: [FootballComponent, StandingsComponent],
  imports: [CommonModule, FootballRoutingModule, HttpClientModule],
  providers: [],
})
export class FootballModule {}
