import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

  // {
  //   path: 'dashboard',
  //   loadChildren: () =>
  //     import('./pages/dashboard/dashboard.module').then(
  //       (mod) => DashboardModule
  //     ),
  // },
  // {
  //   path: 'login',
  //   loadChildren: () =>
  //     import('./pages/auth/auth.module').then((mod) => LoginModule),
  // },
  // {
  //   path: 'validate',
  //   component: ValidateAccountComponent,
  // },
  // {
  //   path: 'reset-password',
  //   component: ResetPasswordComponent,
  // },
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
