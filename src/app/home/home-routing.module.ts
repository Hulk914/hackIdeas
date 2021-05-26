import { HomeComponent } from './home/home.component';
import { ManageChallengesComponent } from './manage-challenges/manage-challenges/manage-challenges.component';
import { ChallengeListComponent } from './challenge-list/challenge-list/challenge-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const homeRoutes: Routes = [
  {
    path: 'features',
    component: HomeComponent,
    children: [
      { path: 'view', component: ChallengeListComponent },
      { path: 'manage', component: ManageChallengesComponent },
    ],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home/features/view'
  }
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
