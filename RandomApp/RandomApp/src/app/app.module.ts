import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { RandomUsersComponent } from './pages/random-users/random-users.component';
import { HttpClientModule } from '@angular/common/http';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { CocktailComponent } from './pages/cocktail/cocktail.component';
import { OtherRandomDataComponent } from './pages/other-random-data/other-random-data.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    PageNotFoundComponent,
    NavigationBarComponent,
    RandomUsersComponent,
    PageTitleComponent,
    CocktailComponent,
    OtherRandomDataComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
