import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sports',
    pathMatch: 'full',
  },
  {
    path: 'sports',
    loadChildren: () =>
      import('./pages/sports/sports.module').then((m) => m.SportsPageModule),
  },
  {
    path: 'sports/:strSport',
    loadChildren: () =>
      import('./pages/leagues/leagues.module').then((m) => m.LeaguesPageModule),
  },
  {
    path: 'sports/:strSport/:strLeague',
    loadChildren: () =>
      import('./pages/teams/teams.module').then((m) => m.TeamsPageModule),
  },
  {
    path: 'sports/:strSport/:strLeague/:strTeam',
    loadChildren: () =>
      import('./pages/desc/desc.module').then((m) => m.DescPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
