import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ChallengeListComponent } from './challenge-list/challenge-list/challenge-list.component';
import { ManageChallengesComponent } from './manage-challenges/manage-challenges/manage-challenges.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ChallengeListComponent, ManageChallengesComponent, HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
